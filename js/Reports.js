function showContent() {
  document.getElementById("show-more-content").style.display = "none";
  let messages = [
    {
      title: "Important Update",
      content:
        "Hi everyone, just wanted to inform you that our team meeting scheduled for tomorrow has been postponed to next week. Please adjust your schedules accordingly.",
      likes: 10,
      dislikes: 2,
      attachments: ["agenda.pdf", "meeting_notes.txt"],
    },
    {
      title: "Project Deadline Extension",
      content:
        "Good news! The deadline for our project has been extended by two weeks. Let's make good use of this extra time to ensure the quality of our work.",
      likes: 15,
      dislikes: 3,
      attachments: ["revised_schedule.jpg", "extension_approval.pdf"],
    },
    {
      title: "Team Lunch Tomorrow",
      content:
        "Don't forget, we're having a team lunch tomorrow at the new Italian restaurant downtown. Looking forward to some delicious food and good company!",
      likes: 8,
      dislikes: 1,
      attachments: ["menu.pdf"],
    },
    {
      title: "Upcoming Training Session",
      content:
        "Just a reminder that our training session on the new software tools is scheduled for this Friday at 10 AM. Make sure to attend and bring your questions!",
      likes: 12,
      dislikes: 0,
      attachments: ["training_materials.zip"],
    },
    {
      title: "Vacation Request Approval",
      content:
        "Great news! My vacation request for next month has been approved. I'll be out of office from the 15th to the 25th. Please reach out to me if you need anything before then.",
      likes: 20,
      dislikes: 5,
      attachments: [],
    },
    {
      title: "New Project Kickoff",
      content:
        "Exciting times ahead! Our new project kicks off next week. Let's bring our A-game and make it a success!",
      likes: 18,
      dislikes: 2,
      attachments: ["project_plan.docx"],
    },
    {
      title: "Company Picnic",
      content:
        "Mark your calendars! The annual company picnic is scheduled for next month. Get ready for a day of fun games, delicious food, and team bonding!",
      likes: 25,
      dislikes: 1,
      attachments: ["picnic_schedule.pdf", "games_list.xlsx"],
    },
    {
      title: "Office Renovation Update",
      content:
        "Just a heads up, our office renovation project is underway. Please pardon the dust and noise during this period. We're excited for the fresh new look!",
      likes: 14,
      dislikes: 3,
      attachments: ["renovation_plan.pdf", "timeline.jpg"],
    },
    {
      title: "Emergency Maintenance Alert",
      content:
        "Attention all employees! There will be emergency maintenance work carried out in the office building this weekend. Please ensure all personal belongings are secured.",
      likes: 9,
      dislikes: 4,
      attachments: ["maintenance_notice.pdf"],
    },
    {
      title: "Employee Appreciation Day this is the title enhancement",
      content:
        "As a token of appreciation for all your hard work, we're celebrating Employee Appreciation Day next Friday. Stay tuned for more details on the festivities!",
      likes: 22,
      dislikes: 0,
      attachments: ["appreciation_event_details.pdf"],
    },
  ];

  let messageTemplate = document.getElementById("messageTemplate");
  let messageGrid = document.createElement("div");
  messageGrid.classList.add("message-grid");

  messages.sort((a, b) => b.likes - b.dislikes - a.likes + a.dislikes);

  messages.forEach((message) => {
    let clone = messageTemplate.content.cloneNode(true);
    clone.querySelector(".message-title").textContent = message.title;
    clone.querySelector(".message-content").textContent = message.content;
    clone.querySelector(".votes").textContent = `${
      message.likes - message.dislikes
    }`;
    clone.querySelector(
      ".attachment-button"
    ).textContent = `${message.attachments.length}`;
    messageGrid.appendChild(clone);
  });

  document.body.appendChild(messageGrid);
}

