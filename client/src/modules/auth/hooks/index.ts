import { useAppState } from "@store/index";
import { globalApiCallHelper } from "@utils/helperFunctions/globalApiCallHelper";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { useState } from "react";

interface SignupProps {
  email: string;
  password: string;
  username: string;
  location: string;
  dob: string;
  firstName: string;
  lastName: string;
}
interface LoginProps {
  email: string;
  password: string;
}

export function useAuth() {
  const toast = useToast();
  const navigate = useNavigate();
  const [state, dispatch] = useAppState();
  const [isLoading, setIsLoading] = useState(false);

  const Signup = async ({
    email,
    password,
    username,
    location,
    dob,
    firstName,
    lastName,
  }: SignupProps) => {
    try {
      setIsLoading(true);

      const res = await globalApiCallHelper({
        api: "/auth/register",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          username,
          location,
          dob,
          firstName,
          lastName,
        }),
      });

      if (res) {
        toast({
          title: "Account Created Successfully",
          position: "bottom-right",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        navigate("/login");
      } else {
        navigate("/signup");
      }
      setIsLoading(false);
    } catch (error) {
      toast({
        title: "Account Creation Failed",
        position: "bottom-right",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const Login = async ({ email, password }: LoginProps) => {
    try {
      setIsLoading(true);

      const res = await globalApiCallHelper({
        api: "/auth/login",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (res._doc) {
        localStorage.setItem("auth_token", res.accessToken);

        toast({
          title: "Logged In Successfully",
          description: "Welcome to MercForms.",
          position: "bottom-right",
          status: "success",
          duration: 5000,
          isClosable: true,
        });

        dispatch({
          type: "setUserProfile",
          payload: {
            firstName: res._doc.firstName,
            lastName: res._doc.lastName,
            email: res._doc.email,
            username: res._doc.username,
            location: res._doc.location,
            dob: res._doc.dob,
            id: res._doc._id,
          },
        });
        navigate("/");
      } else {
        toast({
          title: "Login Failed",
          description: "Please check your credentials.",
          position: "bottom-right",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      toast({
        title: "Login Failed",
        description: "Please check your credentials.",
        position: "bottom-right",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const getAccount = async () => {
    try {
      const authToken = localStorage.getItem("auth_token");

      if (!authToken) {
        console.log("Access token not found.");
        navigate("/login");
      } else {
        const res = await globalApiCallHelper({
          api: "/auth/getAccount",
          method: "GET",
          headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json",
          },
        });

        if (res?._id) {
          dispatch({
            type: "setUserProfile",
            payload: {
              firstName: res.firstName,
              lastName: res.lastName,
              email: res.email,
              username: res.username,
              location: res.location,
              dob: res.dob,
              id: res._id,
            },
          });
        } else {
          navigate("/login");
        }
      }
    } catch (error) {
      console.log("Get Account ERROR: ", error);
    }
  };

  const Logout = async () => {
    try {
      localStorage.removeItem("auth_token");

      // empty all the global state
      dispatch({
        type: "logout",
        payload: {},
      });

      toast({
        title: "Logged Out Successfully",
        position: "bottom-right",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      navigate("/login");
    } catch (error) {
      toast({
        title: "Logout Failed",
        position: "bottom-right",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return {
    isLoading,
    Signup,
    Login,
    Logout,
    getAccount,
  };
}
