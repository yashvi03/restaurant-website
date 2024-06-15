(()=>{"use strict";const e=()=>{const e=document.getElementById("content");e.innerHTML="";const t=document.createElement("div");t.style.position="relative",t.style.width="100%",t.style.height="100vh",t.style.backgroundImage='url("https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',t.style.backgroundSize="cover",t.style.backgroundPosition="center",t.style.display="flex",t.style.flexDirection="column",t.style.justifyContent="center",t.style.alignItems="start",t.style.color="white",t.style.textAlign="center";const n=document.createElement("div"),o=document.createElement("p");o.textContent="Pizzeria",o.style.marginTop="20px",o.style.fontSize="48px",o.style.fontWeight="Bold",n.appendChild(o);const l=document.createElement("p");l.textContent="Welcome to the best pizzeria in town. We serve delicious pizzas with fresh ingredients. Come and taste the difference!",l.style.margin="20px auto",l.style.fontSize="36px",l.style.maxWidth="400px",n.appendChild(l),n.style.flexDirection="column",n.style.margin="36px",t.appendChild(n),e.appendChild(t)};e(),document.getElementById("home").addEventListener("click",e),document.getElementById("menu").addEventListener("click",(()=>{const e=document.getElementById("content");e.innerHTML="";const t=document.createElement("p");t.textContent="Menu",t.style.textAlign="center",t.style.marginBottom="20px",t.style.fontSize="48px",t.style.fontWeight="bold",e.appendChild(t);const n=document.createElement("div");n.style.display="flex",n.style.flexDirection="column",n.style.gap="20px",n.style.padding="20px";const o=(e,t,o)=>{const l=document.createElement("div");l.style.overflow="hidden",l.style.display="flex",l.style.marginRight="48px",l.style.marginLeft="48px",l.style.justifyContent="space-between",l.style.alignContent="start",l.style.padding="15px";const s=document.createElement("div"),a=document.createElement("p");a.textContent=e,a.style.marginBottom="10px",a.style.fontSize="36px",a.style.fontWeight="bold";const i=document.createElement("p");i.textContent=t,i.style.marginBottom="10px",i.style.fontSize="36px",s.appendChild(a),s.appendChild(i);const d=document.createElement("p");d.textContent=o,d.style.fontWeight="bold",d.style.fontSize="36px",l.appendChild(s),l.appendChild(d),n.appendChild(l)};o("Margherita","Fresh tomatoes, fresh mozzarella, fresh basil","$12.50"),o("Formaggio","Four cheeses (mozzarella, parmesan, pecorino, jarlsberg)","$15.50"),o("Parma","Fresh tomatoes, mozzarella, parma, bacon, fresh arugula","$16.50"),o("Meat Town","Fresh tomatoes, mozzarella, hot pepperoni, hot sausage, beef, chicken","$18.50"),o("Pineapple'o'clock","Fresh tomatoes, mozzarella, fresh pineapple, bacon, fresh basil","$20.50"),e.appendChild(n)})),document.getElementById("about").addEventListener("click",(()=>{const e=document.getElementById("content");e.innerHTML="";const t=document.createElement("p");t.textContent="About",t.style.textAlign="center",t.style.marginBottom="20px",t.style.fontSize="48px",t.style.fontWeight="bold",e.appendChild(t);const n=document.createElement("p"),o=document.createElement("p"),l=document.createElement("p");n.textContent="The Pizza Restaurant was founded in blabla by Mr. Italiano in lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",o.textContent="The Chef? Mr. Italiano himself",l.textContent="We are proud of our interiors.",n.classList.add("common-desc"),o.classList.add("common-desc"),l.classList.add("common-desc"),e.appendChild(n),e.appendChild(o),e.appendChild(l)})),document.getElementById("contact").addEventListener("click",(()=>{const e=document.getElementById("content");e.innerHTML="";const t=document.createElement("p");t.textContent="Contact",t.style.textAlign="center",t.style.fontSize="48px",t.style.fontWeight="bold",e.appendChild(t);const n=document.createElement("p");n.textContent="Find us at some address at some place or call us at 05050515-122330. Reserve a table, ask for today's special or just send us a message:",n.style.textAlign="center",n.style.marginBottom="10px 30px",n.style.fontSize="32px",e.appendChild(n);const o=document.createElement("form");o.style.display="flex",o.style.flexDirection="column",o.style.alignItems="center",o.style.gap="10px";const l=document.createElement("input");l.type="text",l.placeholder="Name",l.style.padding="10px",l.style.width="500px";const s=document.createElement("input");s.type="text",s.placeholder="Number Of Persons",s.style.padding="10px",s.style.width="500px";const a=document.createElement("input");a.type="datetime-local",a.placeholder="14-06-2024 20:00",a.style.padding="10px",a.style.width="500px";const i=document.createElement("textarea");i.placeholder="Message",i.style.padding="10px",i.style.width="500px",i.style.height="200px";const d=document.createElement("button");d.textContent="Send",d.style.padding="10px 20px",d.style.backgroundColor="#333",d.style.color="#fff",d.style.border="none",d.style.cursor="pointer",o.appendChild(l),o.appendChild(s),o.appendChild(a),o.appendChild(i),o.appendChild(d),e.appendChild(o)}))})();