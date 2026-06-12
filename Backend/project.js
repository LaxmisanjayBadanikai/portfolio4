// In-memory project store (in real app, replace with database)
class Project {
  constructor(id, title, description, technologies, link, icon = 'fas fa-code') {
    this.id = id;
    this.title = title;
    this.description = description;
    this.technologies = technologies;
    this.link = link;
    this.icon = icon;
  }

  static getAll() {
    return [

        new Project(
            1,
            "Currency Converter",
            "A responsive web application that converts currencies in real time using a simple and user-friendly interface built with HTML, CSS and JavaScript.",
            ["HTML", "CSS", "JavaScript"],
            "https://github.com/LaxmisanjayBadanikai",
            "fas fa-money-bill-wave"
        ),

        new Project(
            2,
            "Calculator",
            "A fully functional calculator supporting basic arithmetic operations with keyboard support and a clean responsive design.",
            ["HTML", "CSS", "JavaScript"],
            "https://github.com/LaxmisanjayBadanikai",
            "fas fa-calculator"
        ),

        new Project(
            3,
            "Hostel Management System",
            "A frontend user interface for hostel administration featuring room allocation, student management and dashboard pages.",
            ["HTML", "CSS", "JavaScript"],
            "https://github.com/LaxmisanjayBadanikai",
            "fas fa-building"
        ),

        new Project(
            4,
            "Rock Paper Scissors Game",
            "An interactive browser game with score tracking, random AI moves and animated gameplay developed using vanilla JavaScript.",
            ["HTML", "CSS", "JavaScript"],
            "https://github.com/LaxmisanjayBadanikai",
            "fas fa-gamepad"
        ),

        new Project(
            5,
            "Timer App",
            "A stopwatch and countdown timer application with start, pause, resume and reset functionality for accurate time tracking.",
            ["HTML", "CSS", "JavaScript"],
            "https://github.com/LaxmisanjayBadanikai",
            "fas fa-clock"
        )

    ];
}
}

module.exports = Project;