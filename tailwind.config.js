/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/*.html",

  ],
  theme: {
    extend: {

      
      fontFamily: {
       
        'Montserrat':['Montserrat', 'sans-serif'],
      },
      mytheme: {
          

 
        "primary": "#7ae2ad",
                  
        
         
        "secondary": "#add2ea",
                  
        
         
        "accent": "#f486d1",
                  
        
         
        "neutral": "#2B313B",
                  
        
         
        "base-100": "#EFF0F6",
                  
        
         
        "info": "#A5B8EE",
                  
        
         
        "success": "#10562B",
                  
        
         
        "warning": "#D4A50C",
                  
        
         
        "error": "#F81234",
                  },
                  animation: {
                    fadeIn: "fadeIn 2s ease-in forwards"
                  },
                  keyframes: {
                    fadeIn: {
                      "0%": { opacity: 0 },
                      "100%": { opacity: 1 }
                    }
                  },
                  variants: {
                    animation: ["motion-safe"]
                },
    },
  },
  plugins: [ 
  
    require("@tailwindcss/typography"), require("daisyui"),

 

],
}

