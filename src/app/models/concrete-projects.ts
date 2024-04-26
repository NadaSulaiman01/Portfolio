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
            ["Different Payment Options:"," The website offers secure online payments as well as pay cash upon delivery option."],
            ["Email Notifications:"," Users receive email notifications about their orders, keeping them updated on the status of their purchases."],
            ["Inventory Management:", " The website allows the admins to manage the inventory and process/cancel orders."] ,
            ["Mobile-Friendly:"," The website is designed to work well on both desktop and mobile devices, allowing users to shop anytime, anywhere."]
        ]),
        tech: "The web application is built using ASP.NET Core MVC, Entity Framework Core, and ASP.NET Core Identity. The application is designed with a user-friendly interface and secure, efficient back-end functionalities.",
        arch: new Map<string, string>([
            ["ASP.NET Core MVC Structure:"," The application follows the Model-View-Controller (MVC) design pattern, ensuring a clean separation of concerns and easier maintenance."],
            ["Entity Framework Core:"," This ORM is used to simplify database operations and for efficient data manipulation using code-first migrations."],
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
        screenshots : ["https://res.cloudinary.com/dhazmjqap/image/upload/v1713895544/one_kjwf7a.png",
            "https://res.cloudinary.com/dhazmjqap/image/upload/v1713895540/two_kucpec.png",
            "https://res.cloudinary.com/dhazmjqap/image/upload/v1713895527/three_hciixr.png",
            "https://res.cloudinary.com/dhazmjqap/image/upload/v1713895528/four_udseqh.png",
            "https://res.cloudinary.com/dhazmjqap/image/upload/v1713895531/five_z7ahya.png",
            "https://res.cloudinary.com/dhazmjqap/image/upload/v1714038867/six_fyqkw7.png",
            "https://res.cloudinary.com/dhazmjqap/image/upload/v1714038866/seven_yszl4z.png",
            "https://res.cloudinary.com/dhazmjqap/image/upload/v1714038875/eight_oibwlw.png",
            "https://res.cloudinary.com/dhazmjqap/image/upload/v1714038866/nine_lbdaly.png",
            "https://res.cloudinary.com/dhazmjqap/image/upload/v1714038863/eleven_s1gmta.png",
            "https://res.cloudinary.com/dhazmjqap/image/upload/v1714038869/ten_cj3y8q.png",
            "https://res.cloudinary.com/dhazmjqap/image/upload/v1714038869/twelve_rfimrc.png",
            "https://res.cloudinary.com/dhazmjqap/image/upload/v1714038869/thirteen_ybbnec.png",
            "https://res.cloudinary.com/dhazmjqap/image/upload/v1714038868/fourteen_jwk9f7.png",
            "https://res.cloudinary.com/dhazmjqap/image/upload/v1714038863/fifteen_qqqgwa.png",
            "https://res.cloudinary.com/dhazmjqap/image/upload/v1714038868/sixteen_ch7yy7.png",
            "https://res.cloudinary.com/dhazmjqap/image/upload/v1714038867/seventeen_fuap6s.png",
            "https://res.cloudinary.com/dhazmjqap/image/upload/v1714038864/eighteen_reo8cy.png",
            "https://res.cloudinary.com/dhazmjqap/image/upload/v1714038865/nineteen_hjgvtg.png"
        ],
        github: "https://github.com/NadaSulaiman01/eCommerce_MVC",
        video: "https://res.cloudinary.com/dhazmjqap/video/upload/v1714058324/1_1__1_1_pclp8t.mp4"
    },
    {
        projectId: 1,
        title: "Internet Movies Database",
        subTitle: "A comprehensive platform for movie enthusiasts to browse, review, and discuss movies. It includes an admin dashboard for efficient movie and review management.",
        icon: "bi bi-film",
        description: "This is a web application that provides a user-friendly interface where users can browse movies, view their details like rating, description, or cast. It also allows users to review movies and view other users’ reviews.",
        features: new Map<string, string>( [
            ["User-Friendly Interface:"," The app’s intuitive layout simplifies movie discovery for users."],
            ["Secure User Accounts:"," Users can create their own personal accounts to allow them to leave reviews and discuss the movies with other users."],
            ["Top-Rated Movies:","  The application keeps track of the highest-rated movies in each genre."],
            ["Comprehensive Movie Information:"," The application serves as a movie encyclopedia, providing all-inclusive details about each movie, including ratings, plot summaries, cast information, posters, release years, and genres."],
            ["Genre-Based Browsing:"," Users can explore movies by genre."],
            ["Movie Reviews:","  Users can review movies and check other users’ reviews on all movies."],
            ["Admin Dashboard"," An admin dashboard is available for adding/deleting movies, editing movie details, and managing user reviews on movies."],
            ["Responsive-design:"," The website is designed with different screen sizes in mind, which allows it to works well with all devices."]
        ]),
        tech: "The web application, developed with .NET Core Web API, EF Core, SQL Server, Angular, and PrimeNG, combines a user-friendly front-end with a secure, efficient back-end.",
        arch: new Map<string, string>([
            [".NET Core Web API:"," The website used .NET Web API to integrate with the Angular frontend."],
            ["Entity Framework Core:"," This allows for efficient data access and manipulation using code-first migrations."],
            ["ASP.NET Core Identity:"," This provides secure user authentication and authorization."],
            ["Angular and PrimeNG:"," These are used to provide the website with a modern and responsive interface."],
            ["JWT and Refresh Tokens:"," The application uses JSON Web Tokens (JWT) and refresh tokens for secure and efficient user authentication."],
            ["Efficient Pagination:"," The application implements pagination on both the front-end and back-end, enhancing performance and user experience by loading data incrementally."],
            ["Role Management:"," This allows to have the usual users who can check and review the movies on the website, and the admins who manage the content of the website."],
            ["Cloudinary Integration:"," The application can manage media files efficiently using a cloud service, Cloudinary."]
        ]),
        logos: new Map<string, string>( [
            ["HTML5","https://res.cloudinary.com/dhazmjqap/image/upload/v1713740499/html_nclh4a.png"],
            ["CSS3","https://res.cloudinary.com/dhazmjqap/image/upload/v1713740498/css-logo_yeyazf.png"],
            ["Angular","https://res.cloudinary.com/dhazmjqap/image/upload/v1713740497/angular_telb6u.png"],
            ["PrimeNG", "https://res.cloudinary.com/dhazmjqap/image/upload/v1713740501/primeng-logo_jqoxnu.png"],
            [".NET Core","https://res.cloudinary.com/dhazmjqap/image/upload/v1713740501/NET_Core_Logo.svg_y8ek8n.png"],
            ["SQL Server", "https://res.cloudinary.com/dhazmjqap/image/upload/v1713740500/sql_server_l4xjc4.png"],
          
        ]),
        screenshots : ["https://res.cloudinary.com/dhazmjqap/image/upload/v1714040172/1_zetenq.png",
            "https://res.cloudinary.com/dhazmjqap/image/upload/v1714040168/2_klomt0.png",
            "https://res.cloudinary.com/dhazmjqap/image/upload/v1714040170/3_cjim0w.png",
            "https://res.cloudinary.com/dhazmjqap/image/upload/v1714040170/4_n0kii7.png",
            "https://res.cloudinary.com/dhazmjqap/image/upload/v1714040167/5_a5ttwc.png",
            "https://res.cloudinary.com/dhazmjqap/image/upload/v1714040169/6_g8tlaz.png",
            "https://res.cloudinary.com/dhazmjqap/image/upload/v1714040170/7_bxjhxt.png",
            "https://res.cloudinary.com/dhazmjqap/image/upload/v1714040172/8_krrk5o.png",
            "https://res.cloudinary.com/dhazmjqap/image/upload/v1714040172/9_y2qhku.png",
            "https://res.cloudinary.com/dhazmjqap/image/upload/v1714040172/10_bebv9b.png",
            "https://res.cloudinary.com/dhazmjqap/image/upload/v1714040175/11_ir4qii.png"
        ],
        github: "https://github.com/NadaSulaiman01/Movies",
        video: "https://res.cloudinary.com/dhazmjqap/video/upload/v1714058341/1_2_1_1_rajljz.mp4"
    }
];

    static getProject(id: Number) {
       return this.projects.find(p => p.projectId == id);

    }

}

