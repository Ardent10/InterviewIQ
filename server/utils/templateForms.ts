export const templateForms = [
  {
    form_title: "Event Registration Form",
    form_description:
      "Event Timing: October 4th-6th, 2023\nEvent Address: 123 Your Street Your City, ST 12345\nContact us at (123) 456-7890 or no_reply@example.com",
    questions: [
      {
        questionText: "What day will you attend?",
        answerType: "Multiple Choice",
        isRequired: false,
        choices: [
          {
            choiceText: "Day 1",
          },
          {
            choiceText: "Day 2",
          },
          {
            choiceText: "Day 3",
          },
          {
            choiceText: "Day 4",
          },
        ],
      },
      {
        questionText: "Dietary restrictions",
        answerType: "Multiple Choice",
        paragraphAnswer: "",
        isRequired: false,
        choices: [
          {
            choiceText: "None",
          },
          {
            choiceText: "Vegetarian",
          },
          {
            choiceText: "Non Vegetarian",
          },
          {
            choiceText: "Gluten free",
          },
          {
            choiceText: "Keto",
          },
        ],
      },
      {
        questionText: "I understand that I will pay ₹1000 on my arrival",
        answerType: "Checkboxes",
        paragraphAnswer: "",
        isRequired: true,
        choices: [
          {
            choiceText: "Yes",
          },
        ],
      },
    ],
  },
  {
    form_title: "Contact Information",
    form_description: "Your basic our Contact Information form. ",
    questions: [
      {
        questionText: "Address",
        answerType: "Paragraph",
        isRequired: false,
        choices: [
          {
            choiceText: "Option 1",
          },
        ],
      },
      {
        questionText: "Comments.",
        answerType: "Paragraph",
        paragraphAnswer: "",
        isRequired: false,
        choices: [
          {
            choiceText: "Option 1",
          },
        ],
      },
    ],
  },
  {
    form_title: "Party Invitation",
    form_description:
      "Join us for an unforgettable night of celebration, laughter, and fun! Get ready to dance, mingle, and create lasting memories at our exclusive Party Invitation. Don't miss out on this exciting event!",
    questions: [
      {
        questionText: "Can you attend?",
        answerType: "Multiple Choice",
        isRequired: false,
        choices: [
          {
            choiceText: "Yes",
          },
          { choiceText: "No" },
        ],
      },
      {
        questionText: "How many of you are attending?",
        answerType: "Paragraph",
        paragraphAnswer: "",
        isRequired: false,
        choices: [
          {
            choiceText: "Option 1",
          },
        ],
      },
      {
        questionText: "What will you be bringing?",
        answerType: "Multiple Choice",
        paragraphAnswer: "",
        isRequired: false,
        choices: [
          {
            choiceText: "Mains",
          },
          {
            choiceText: "Salads",
          },
          {
            choiceText: "Desserts",
          },
          {
            choiceText: "Drinks",
          },
          {
            choiceText: "Appetizers",
          },
        ],
      },
      {
        questionText: "Do you have any allergies or dietary restrictions?",
        answerType: "Paragraph",
        paragraphAnswer: "",
        isRequired: false,
        choices: [],
      },
    ],
  },
]; 