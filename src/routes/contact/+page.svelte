<!-- Contact.svelte -->
<script>
   export let email = 'joesenny.dev@gmail.com';
 </script>
 
 <main>
   <h1>Contact Me</h1>
   <p>Feel free to get in touch using the following methods:</p>
 
   <ul>
     <li><a href="https://www.linkedin.com/in/joe-senenfelder-159496260/" target="_blank" rel="noopener">LinkedIn</a></li>
     <li><a href="https://twitter.com/joesenny" target="_blank" rel="noopener">Twitter</a></li>
     <li><a href="mailto:{email}">eMail Me Here</a></li>
     <li><a href="https://github.com/Joesenny" target="_blank" rel="noopener">GitHub</a></li>
   </ul>
 </main>
 
 <style>
   main {
     max-width: 600px;
     margin: 0 auto;
     padding: 2rem;
   }
 
   h1 {
     font-size: 2rem;
     margin-bottom: 1rem;
   }
 
   p {
     margin-bottom: 2rem;
   }
 
   ul {
     list-style-type: none;
     padding: 0;
   }
 
   li {
     margin-bottom: 1rem;
   }

   li:hover {
     color: #0070f3;
     scale: 1.1;
   }
 
   a {
     color: #0070f3;
     text-decoration: none;
   }
 
   a:hover {
     text-decoration: underline;
   }
 </style>
 