import { KeyValue } from "@angular/common";
import { Ispecs } from "./ispecs";

export class ConcreteProjects {

    static projects : Ispecs[]=[{
        projectId: 0,
        title: "Online Bookstore",
        subTitle: "An Online Shopping Platform with a comprehensive selection of products, easy navigation, secure transactions, and an integrated inventory management system.",
        icon: "bi bi-basket2",
        description: "This is an online shopping platform that offers a user-friendly and secure shopping experience. It’s designed with a modern look and feel, and it’s easy to navigate for all users.",
        features: new Map<string, string>( [
            ["User-Friendly Design:"," The website has a clean and intuitive design, making it easy for users to browse and find what they’re looking for."],
            ["Secure User Accounts:"," Users can create their own personal accounts, allowing them to track their orders, save their shipping information, and more."],
            ["Social Media Login:","  For convenience, users have the option to log in using their Google or Facebook accounts."],
            ["Product Variety:"," The website offers a wide range of products, catering to different tastes and needs."],
            ["Shopping Cart:"," Users can easily add items to their shopping cart and view their selected items before making a purchase."],
            ["Different Payment Options:"," The website offers secure online payments as well as the pay cash upon delivery option."],
            ["Email Notifications:"," Users receive email notifications about their orders, keeping them updated on the status of their purchases."],
            ["Mobile-Friendly:"," The website is designed to work well on both desktop and mobile devices, allowing users to shop anytime, anywhere."]
        ]),
        tech: "The web application is built using ASP.NET Core MVC, Entity Framework Core, and ASP.NET Core Identity. The application is designed with a user-friendly interface and secure, efficient back-end functionalities.",
        arch: new Map<string, string>([
            ["ASP.NET Core MVC Structure:"," The application follows the Model-View-Controller (MVC) design pattern, ensuring a clean separation of concerns and easier maintenance."],
            ["Entity Framework Core:"," This allows for efficient data access and manipulation using code-first migrations."],
            ["ASP.NET Core Identity:"," This provides secure user authentication and authorization."],
            ["Razor Class Library Interaction:"," The application interacts with the Razor class library for Identity."],
            ["Session Management:"," The application effectively manages user sessions, ensuring a personalized user experience."],
            ["Bootstrap v5:"," This ensures the application is mobile-friendly and has a modern, responsive design."],
            ["Third-Party Authentication:"," The application supports Google and Facebook login."],
            ["Role Management:"," This feature allows for the assignment of roles to users, enhancing the security and functionality of the application."],
            ["Email Notifications:"," The application can send email notifications using SendGrid."],
            ["Stripe Payment Integration:"," This allows for secure online payments."],
            ["Repository Pattern:"," This design pattern is used for data access, making the code more readable, scalable, and maintainable."],
            ["N-tier architecture:","This is used separate concerns and promote modularity, making the system easier to manage, maintain, and scale."]
        ]),
        logos: new Map<string, string>( [
            ["HTML5","https://res.cloudinary.com/dhazmjqap/image/upload/v1713740499/html_nclh4a.png"],
            ["CSS3","https://res.cloudinary.com/dhazmjqap/image/upload/v1713740498/css-logo_yeyazf.png"],
            ["Bootstrap","https://res.cloudinary.com/dhazmjqap/image/upload/v1713740497/bootstrap-5-logo-icon_up2rul.png"],
            [".NET Core","https://res.cloudinary.com/dhazmjqap/image/upload/v1713740501/NET_Core_Logo.svg_y8ek8n.png"],
            ["SQL Server", "https://res.cloudinary.com/dhazmjqap/image/upload/v1713740500/sql_server_l4xjc4.png"],
          
        ]),
        screenshots : ["https://res.cloudinary.com/dhazmjqap/image/upload/v1713771624/home_bu3hll.png",
            "https://res.cloudinary.com/dhazmjqap/image/upload/v1713771624/home_bu3hll.png",
            "https://res.cloudinary.com/dhazmjqap/image/upload/v1713771624/home_bu3hll.png"
        ],
        github: "https://github.com/NadaSulaiman01/eCommerce_MVC"
    }];

    static getProject(id: Number) {
       return this.projects.find(p => p.projectId == id);

    }

}

