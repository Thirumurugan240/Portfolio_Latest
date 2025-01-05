gsap.from('#navbar_1',{duration:2,y:'-100%',ease: "bounce.out",})

gsap.from('.inside_nav',{duration:1,opacity:0,delay:1, stagger: .5})

gsap.from('.name_here',{duration:2,opacity:0})


async function getQuote() {
  try {
    const response = await fetch("https://qapi.vercel.app/api/random");
    const data = await response.json();
    alert(data.quote); // Show the fetched quote in an alert box
  } catch (error) {
    console.error("Error fetching the quote:", error);
    alert("Failed to fetch the quote. Please try again.");
  }
}