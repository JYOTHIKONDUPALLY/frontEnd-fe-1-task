//Team Data
const team = [
    {
      id: "anna",
      fullName: "Anna Kendrick",
      jobTitle: "Front-end Ninja",
      bio:
        "Bibliophile, loves to dive into fictional worlds, ships JS code like brownies",
      avatar: "https://avatars.dicebear.com/api/avataaars/annakendrick.svg"
    },
    {
      id: "harry",
      fullName: "Harry Fawn",
      jobTitle: "Illustrator",
      bio:
        "Creates new illustrations each week, will kill for coffee, and loves beaches",
      avatar: "https://avatars.dicebear.com/api/avataaars/harryfn.svg"
    },
    {
      id: "sofia",
      fullName: "Sofia Sultan",
      jobTitle: "Backend Engineer",
      bio:
        "Donuts over waffles. Martinis over whiskeys. Typescript over anything.",
      avatar: "https://avatars.dicebear.com/api/avataaars/sofiasul.svg"
    }
  ];
  
  //Modify Code below this line
  
  //Content Selected using ID.
  const content = document.getElementById("content");

  const getImageElement = (src, alt) => {
    let img=document.createElement("img");
    img.setAttribute('src',`${src}`);
    img.setAttribute('alt',`${alt}`)
    return img;
  };
  
  function generateCard(id, fullName, jobTitle, bio, avatar) {
    //1. Create a new "section" element and set the className and id
  let section=document.createElement("section");
  section.setAttribute('id',`${id}`);
  section.setAttribute('class','team-member');
    //2. Generate the image using getImageElement() function
    //Hint - Use fullname as alt for the image.
  let img=getImageElement(avatar,fullName);
    //3. Create a div for text content
  let div=document.createElement("div");
    //4. Create an h2 for fullName
  let h2=document.createElement("h2");
  h2.innerText=fullName;
    //5. Create an h3 for jobTitle
    let h3=document.createElement("h3");
    h3.innerText=jobTitle;
    //6. Create a p for bio
    let p=document.createElement("p");
    p.innerText=bio;
    //7. Append the fullName, jobTitle, and bio element
    //   to the div created for text.
    div.append(h2);
    div.append(h3);
    div.append(p);
    //8. Append the Image and the Text div
    //   to the new section you created in step 1
  section.append(img);
  section.append(div);
    //Return the new section element created.
    return section;
  }
  
  /**
   * Generates and returns an array of HTML elements
   * @param {Array} data Team data array
   */
  function generateCardArray(data) {
    const cards = [];
    //Add logic to populate `cards` array below
    //Return cards array
    const Data=Array.from(data);
    Data.forEach((e)=>{
        let card=generateCard(e.id, e.fullName, e.jobTitle, e.bio, e.divavatar);
        cards.push(card);
    })
    return cards;
  }
  
  const cardsArray = generateCardArray(team);
  
  //Run a loop for the cardsArray and append its elements to content.
  for (let card of cardsArray) {
    content.append(card);
  }
  //Modify Code above this line
  