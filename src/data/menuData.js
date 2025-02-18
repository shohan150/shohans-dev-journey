const menuData = [
   {
     title: "Home",
     link: "/",
   },
   {
     title: "Institute Info",
     children: [
       {
         title: "Administration",
         children: [
           {
             title: "Welcome Speech",
             link: "/welcome-speech",
           },
           {
             title: "Committee Members",
             link: "/committee-members",
           },
         ],
       },
       {
         title: "List",
         children: [
           {
             title: "Student List",
             link: "/students",
           },
           {
             title: "Teacher List",
             link: "/teachers",
           },
           {
             title: "Staff List",
             link: "/staffs",
           },
         ],
       },
       {
         title: "About Institute",
         link: "/about-institute",
       },
     ],
   },
   {
     title: "Academic Info",
     children: [
       {
         title: "Details",
         children: [
           {
             title: "Dress Code",
             link: "/dress-code",
           },
           {
             title: "Total Seat Info",
             link: "/total-seat-info",
           },
           // {
           //   title: "Academic Syllabus",
           //   link: "/syllabus",
           // },
           // {
           //   title: "Fees Structure",
           //   link: "/fees",
           // },
           // {
           //   title: "Payslip",
           //   link: "/payslip",
           // },
         ],
       },
       // {
       //   title: "Attendance Info",
       //   children: [
       //     {
       //       title: "Student Attendance",
       //       link: "/student-attendance",
       //     },
       //     {
       //       title: "Teacher Attendance",
       //       link: "/teacher-attendance",
       //     },
       //     {
       //       title: "Staff Attendance",
       //       link: "/staff-attendance",
       //     },
       //   ],
       // },
       // {
       //   title: "Student Info",
       //   children: [
       //     {
       //       title: "Class Routine",
       //       link: "/class-routine",
       //     },
       //     {
       //       title: "Exam Routine",
       //       link: "/exam-routine",
       //     },
       //     {
       //       title: "Academic Transcript",
       //       link: "/academic-transcript",
       //     },
       //   ],
       // },
       {
         title: "Online Admission",
         link: "/admission-page",
       },
     ],
   },
   {
     title: "Download Corner",
     children: [
       // {
       //   title: "Fees Info",
       //   link: "/fee-info",
       // },
       {
         title: "Exam Documents",
         children: [
           // {
           //   title: "Seat Plan",
           //   link: "/seat-plan",
           // },
           // {
           //   title: "Exam Admit Card",
           //   link: "/exam-admit-card",
           // },
           {
             title: "Exam Result",
             link: "/exam-result",
           },
         ]
       },
       {
         title: "Academic Documents",
         link: "/academic-documents-download",
       }
     ],
   },
   {
     title: "Gallery",
     children: [
       {
         title: "Photo Gallery",
         link: "/picture-gallery",
       },
       {
         title: "Video Gallery",
         link: "/video-gallery",
       },
     ],
   },
   {
     title: "Notices & Events",
     children: [
       // {
       //   title: "Job Corner",
       //   link: "/job-corner",
       // },
       {
         title: "Notices",
         link: "/notices-and-announcements",
       },
       {
         title: "Events",
         link: "/events",
       },
     ],
   },
   {
     title: "Contact Us",
     link: "/contact-us",
   },
 ];
 
 export default menuData;