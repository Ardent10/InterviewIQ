export const sdeForm = {
  form_title: "Software Engineer Hiring | InterviewIQ",
  form_description: "Test your coding skills with our Coding Questions Form.",
  questions: [
    {
      questionText: "What is your favorite programming language?",
      answerType: "Short Answer",
      isRequired: true,
      choices: [],
    },
    {
      questionText: "Implement a function to reverse a string in Python.",
      answerType: "Code Editor",
      isRequired: true,
      choices: [],
    },
    {
      questionText: "Explain the concept of recursion.",
      answerType: "Paragraph",
      isRequired: true,
      choices: [],
    },
    {
      questionText:
        "What is the difference between pass by value and pass by reference?",
      answerType: "Paragraph",
      isRequired: true,
      choices: [],
    },
    {
      questionText: "What is the output of the following C++ code?",
      answerType: "Code Editor",
      isRequired: true,
      choices: [],
    },
    {
      questionText: "Explain the use of 'const' keyword in C++.",
      answerType: "Paragraph",
      isRequired: true,
      choices: [],
    },
    {
      questionText: "What is a constructor and destructor in C++?",
      answerType: "Paragraph",
      isRequired: true,
      choices: [],
    },
    {
      questionText:
        "What is the difference between '==', '===', and 'equals()' in Java?",
      answerType: "Paragraph",
      isRequired: true,
      choices: [],
    },
    {
      questionText: "Explain the concept of inheritance in Java.",
      answerType: "Paragraph",
      isRequired: true,
      choices: [],
    },
    {
      questionText:
        "What is the difference between 'ArrayList' and 'LinkedList' in Java?",
      answerType: "Paragraph",
      isRequired: true,
      choices: [],
    },
  ],
};

export const dbmsForm = {
  form_title: "Database Management Systems",
  form_description:
    "Explore your knowledge of Database Management Systems with our DBMS Questions Form.",
  questions: [
    {
      questionText: "What is a primary key?",
      answerType: "Short Answer",
      isRequired: true,
      choices: [],
      completeAnswer:
        "A primary key is a unique identifier for each record in a database table. It ensures that each row in the table can be uniquely identified and accessed quickly. Primary keys are used to enforce entity integrity and to establish relationships between tables in a relational database.",
    },
    {
      questionText: "Explain the difference between a join and a subquery.",
      answerType: "Paragraph",
      isRequired: true,
      choices: [],
      completeAnswer:
        "A join is used to combine rows from two or more tables based on a related column between them. It retrieves data from multiple tables and presents the result as a single set. On the other hand, a subquery is a nested query that is embedded within another SQL statement. It is used to retrieve data that is based on the result of another query.",
    },
    {
      questionText: "What is normalization in databases?",
      answerType: "Paragraph",
      isRequired: true,
      choices: [],
      completeAnswer:
        "Normalization is the process of organizing data in a database to reduce redundancy and improve data integrity. It involves breaking down a large table into smaller, more manageable tables and defining relationships between them. Normalization helps eliminate data anomalies such as insertion, update, and deletion anomalies, and ensures that each piece of data is stored only once.",
    },
    {
      questionText: "Explain the concept of foreign key.",
      answerType: "Paragraph",
      isRequired: true,
      choices: [],
      completeAnswer:
        "A foreign key is a column or a group of columns in a table that references the primary key of another table. It establishes a relationship between two tables by enforcing referential integrity. A foreign key constraint ensures that the values in the foreign key column(s) of one table match the values in the primary key column(s) of another table, or are null.",
    },
  ],
};

export const sqlQueriesForm = {
  form_title: "Structured Query Language (SQL)",
  form_description: "Test your SQL skills with our SQL Queries Form.",
  questions: [
    {
      questionText:
        "Write a SQL query to select all employees from the 'employees' table.",
      answerType: "Code Editor",
      isRequired: true,
      choices: [],
      completeAnswer: "SELECT * FROM employees;",
    },
    {
      questionText:
        "Explain the difference between 'GROUP BY' and 'HAVING' clauses in SQL.",
      answerType: "Paragraph",
      isRequired: true,
      choices: [],
      completeAnswer:
        "The 'GROUP BY' clause is used to group rows that have the same values into summary rows, typically for aggregation purposes such as calculating totals or averages. The 'HAVING' clause is used to filter the results of a 'GROUP BY' clause based on a specified condition. While the 'WHERE' clause filters rows before grouping, the 'HAVING' clause filters groups after grouping.",
    },
    {
      questionText: "What are the different types of JOINs in SQL?",
      answerType: "Paragraph",
      isRequired: true,
      choices: [],
      completeAnswer:
        "The different types of JOINs in SQL are:\n1. INNER JOIN: Returns records that have matching values in both tables.\n2. LEFT JOIN (or LEFT OUTER JOIN): Returns all records from the left table and matching records from the right table.\n3. RIGHT JOIN (or RIGHT OUTER JOIN): Returns all records from the right table and matching records from the left table.\n4. FULL JOIN (or FULL OUTER JOIN): Returns all records when there is a match in either the left or right table.\n5. CROSS JOIN: Returns the Cartesian product of the two tables, i.e., all possible combinations of rows from both tables.",
    },
    // Add more questions as needed...
  ],
};
