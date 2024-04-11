import { Router } from "express";
import FormModel from "../models/forms";
import FormResponseModel from "../models/formResponse";
import { transporter, mailOptions } from "../utils/nodeMailer";
import { SendFormInviteTemplate } from "../utils/sendFormInvite";

const router: Router = Router();

// Get all forms
router.get("/getAllforms", async (req, res) => {
  try {
    const forms = await FormModel.find({
      userId: req.query.userId,
    });
    res.json(forms);
  } catch (error) {
    res.status(500).json({ error: "Could not retrieve forms" });
  }
});
// Create
router.post("/create", async (req, res) => {
  try {
    const newForm = new FormModel(req.body);
    const savedForm = await newForm.save();
    res.status(201).json(savedForm);
  } catch (error) {
    console.error("Error creating form:", error);
    res.status(500).json({ error: "Could not create form" });
  }
});

// Save form response
router.post("/save-response", async (req, res) => {
  try {
    const newFormResponse = new FormResponseModel(req.body);
    const savedFormResponse = await newFormResponse.save();
    res.status(201).json(savedFormResponse);
  } catch (error) {
    res.status(500).json({ error: "There was an error while saving the form" });
  }
});

// Find Response by Id
router.get("/getAllFormResponses/:id", async (req, res) => {
  try {
    const formResponse = await FormResponseModel.find({
      formId: req.params.id,
    });

    if (!formResponse) {
      res.status(404).json({ error: "No Response found for this form." });
    } else {
      res.status(200).json(formResponse);
    }
  } catch (error) {
    res.status(500).json({ error: "Could not retrieve form responses." });
  }
});

router.get("/getFormResponseById/:responseId", async (req, res) => {
  try {
    const formResponse = await FormResponseModel.findById({
      _id: req.params.responseId,
    });
    if (!formResponse) {
      res.status(404).json({ error: "Form Response not found" });
    } else {
      res.json(formResponse);
    }
  } catch (error) {
    res.status(500).json({ error: "Could not retrieve form response" });
  }
});

// Send form link invite via email
router.post("/form-invite", async (req, res) => {
  try {
    const { email, url, subject, message } = req.body;
    console.log("email", url, email);
    // Send the email asynchronously
    const sendEmail = async () => {
      return new Promise((resolve, reject) => {
        transporter.sendMail(
          mailOptions(
            email,
            subject,
            "invited",
            SendFormInviteTemplate({
              email: email,
              url: url,
              message: message,
            })
          ),
          function (error, info) {
            if (error) {
              console.error("Error sending invite email:", error);
              reject(error); // Reject the promise if there's an error
            } else {
              console.log("Email sent: " + info);
              resolve(info); // Resolve the promise if email is sent successfully
            }
          }
        );
      });
    };

    // Send the email and handle the response
    const emailResponse = await sendEmail();

    // Send a response to the frontend
    res
      .status(201)
      .json({ message: "Email sent successfully", response: emailResponse });
  } catch (error) {
    console.error("Error sending invite email:", error);
    res.status(500).json({ error: "Could not send invite email" });
  }
});

// Get a particular form
router.get("/getFormById/:id", async (req, res) => {
  try {
    const form = await FormModel.findById(req.params.id);
    if (!form) {
      res.status(404).json({ error: "Form not found" });
    } else {
      res.json(form);
    }
  } catch (error) {
    res.status(500).json({ error: "Could not retrieve form" });
  }
});

// Update a form
router.put("/update-form/:id", async (req, res) => {
  try {
    const updatedForm = await FormModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedForm) {
      res.status(404).json({ error: "Form not found" });
    } else {
      res.status(201).json(updatedForm);
    }
  } catch (error) {
    res.status(500).json({ error: "Could not update form" });
  }
});

router.delete("/forms/:id", async (req, res) => {
  try {
    const deletedForm = await FormModel.findByIdAndRemove(req.params.id);
    if (!deletedForm) {
      res.status(404).json({ error: "Form not found" });
    } else {
      res.json(deletedForm);
    }
  } catch (error) {
    res.status(500).json({ error: "Could not delete form" });
  }
});

export default router;
