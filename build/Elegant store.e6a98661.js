(()=>{let e=[{id:1,name:"Classic Men's T-Shirt",category:"men",price:19.99,description:"Comfortable cotton t-shirt in navy blue.",image:"https://cdn11.bigcommerce.com/s-2gncvdgiio/images/stencil/1280x1280/products/107304/190106/Chill_Nation_Logo_Classic_arf_220720_arf__60647.1595409158.jpg?c=1"},{id:2,name:"Men's Denim Jeans",category:"men",price:49.95,description:"Stylish slim-fit jeans for everyday wear.",image:"https://ae01.alicdn.com/kf/HTB1g6eFbjLuK1Rjy0Fhq6xpdFXaB/2019-Mens-Skinny-Jeans-Black-Distressed-Denim-Stretch-Jeans-Men-Hombre-Slim-Fit-Fashion-Elastic-Waist.jpg"},{id:3,name:"Leather Belt",category:"men",price:25,description:"Genuine leather belt with stylish buckle.",image:"https://i.etsystatic.com/17144720/r/il/3e8033/3229078507/il_fullxfull.3229078507_mif6.jpg"},{id:4,name:"Elegant Women's Dress",category:"women",price:59.99,description:"Perfect evening dress with delicate lace details.",image:"https://i5.walmartimages.com/asr/eb87c5ba-0a89-40af-8f8d-7114e36c70ee_1.adba80881b1e58c8c170e626dc78e980.jpeg"},{id:5,name:"Women's Handbag",category:"women",price:45,description:"Chic handbag made from premium materials.",image:"https://i5.walmartimages.com/asr/b23ad0a8-5db3-430d-b0d5-d99cda7abac6.c742955c146fad3c6c6ac618e7555728.jpeg"},{id:6,name:"Stylish Sunglasses",category:"women",price:29.95,description:"Protect your eyes with fashion-forward sunglasses.",image:"https://i.pinimg.com/originals/e4/f4/60/e4f460866229b45c550bf8bc9dc9e22a.jpg"},{id:7,name:"Kids' Hoodie",category:"kids",price:22.49,description:"Cozy hoodie in vibrant colors for kids.",image:"https://i5.walmartimages.com/asr/8b1d4b6c-bbeb-42a1-a5a7-a985316838f5_2.8a12fca55dbb5f8711150aaa15576812.jpeg"},{id:8,name:"Kids' Sneakers",category:"kids",price:35,description:"Comfortable and durable sneakers for kids.",image:"https://i5.walmartimages.com/seo/B91xZ-Girls-Sneakers-Children-Sneakers-Girls-Flat-Thick-Bottom-Non-Slip-Lightweight-Mesh-Upper-Breathable-White-2-Big-Kids_bea255f3-f24a-417d-9604-71db01742345.80a56f6b36210e166df784cb7cbf4657.jpeg"},{id:9,name:"Kids' Cap",category:"kids",price:12,description:"Colorful cap perfect for sunny days.",image:"http://images.esellerpro.com/2355/I/154/303/11107%20-%20CM306%20-%201.jpg"}],t=e.slice(),i=[],a=document.querySelector(".products"),r=document.querySelectorAll(".category-btn"),n=document.getElementById("searchInput"),s=document.querySelector("nav .cart-button"),c=document.getElementById("cartPanel"),o=c.querySelector(".cart-items"),l=c.querySelector(".cart-total"),d=c.querySelector("form.user-details"),m=c.querySelector(".invoice-container"),u=c.querySelector(".invoice-content"),p=c.querySelector(".print-btn"),g=document.querySelectorAll(".carousel-image"),h=document.querySelectorAll(".carousel-controls button"),f=0;function b(e){g.forEach((t,i)=>{t.style.display=i===e?"block":"none"}),h.forEach((t,i)=>{t.classList.toggle("active",i===e),t.setAttribute("aria-pressed",i===e?"true":"false")}),f=e}function y(t){if(a.innerHTML="",0===t.length){a.innerHTML='<p style="grid-column: 1/-1; text-align:center; color:#888;">No products found.</p>';return}t.forEach(t=>{let r=document.createElement("article");r.className="product-card",r.setAttribute("role","article"),r.setAttribute("aria-label",t.name+", price Rs."+t.price.toFixed(2)),r.innerHTML=`
                <img src="${t.image}" alt="${t.name}" loading="lazy" />
                <h3>${t.name}</h3>
                <p>${t.description}</p>
                <div class="price">Rs.${t.price.toFixed(2)}</div>
                <button class="add-to-cart" aria-label="Add ${t.name} to cart">Add to Cart</button>
            `,r.querySelector("button").addEventListener("click",()=>(function(t){let a=i.find(e=>e.product.id===t);if(a)a.quantity+=1;else{let a=e.find(e=>e.id===t);a&&i.push({product:a,quantity:1})}E(),c.classList.contains("active")||C(!0)})(t.id)),a.appendChild(r)})}function v(i){t="all"===i?e.slice():e.filter(e=>e.category===i),L(n.value.trim().toLowerCase()),y(t)}function L(e){if(!e)return void y(t);y(t.filter(t=>t.name.toLowerCase().includes(e)||t.description.toLowerCase().includes(e)))}function E(){if(o.innerHTML="",0===i.length)o.innerHTML="<p>Your cart is empty.</p>",l.textContent="",S(!1),k();else{i.forEach(({product:e,quantity:t})=>{let a=document.createElement("div");a.className="cart-item",a.innerHTML=`
                    <span>${e.name} x ${t}</span>
                    <button aria-label="Remove ${e.name} from cart" title="Remove" style="background:none;border:none;color:#5a2a83;cursor:pointer;font-weight:700;">&times;</button>
                `,a.querySelector("button").addEventListener("click",()=>(function(e){let t=i.findIndex(t=>t.product.id===e);-1!==t&&i.splice(t,1),E()})(e.id)),o.appendChild(a)});let e=i.reduce((e,t)=>e+t.product.price*t.quantity,0);l.textContent=`Total: Rs.${e.toFixed(2)}`,S(!0),k()}let e=document.getElementById("cartCountBadge"),t=i.reduce((e,t)=>e+t.quantity,0);e.textContent=t,t>0?e.style.display="inline-block":e.style.display="none"}function S(e){e?d.style.display="flex":d.style.display="none"}function k(){m.classList.remove("active"),u.innerHTML=""}function C(e){e?(c.classList.add("active"),c.setAttribute("aria-hidden","false"),s.setAttribute("aria-expanded","true")):(c.classList.remove("active"),c.setAttribute("aria-hidden","true"),s.setAttribute("aria-expanded","false"))}h.forEach((e,t)=>{e.addEventListener("click",()=>b(t))}),setInterval(()=>{b((f+1)%g.length)},5e3),b(0),s.addEventListener("click",()=>{C(!c.classList.contains("active"))}),document.addEventListener("click",e=>{c.contains(e.target)||s.contains(e.target)||C(!1)}),d.addEventListener("submit",e=>{if(e.preventDefault(),d.reportValidity()){if(0===i.length)return void alert("Your cart is empty. Please add some products.");u.innerHTML=function(e,t){let i="";t.forEach(({product:e,quantity:t},a)=>{let r=e.price*t;i+=`
                <tr>
                    <td>${a+1}</td>
                    <td>${e.name}</td>
                    <td>Rs.${e.price.toFixed(2)}</td>
                    <td>${t}</td>
                    <td>Rs.${r.toFixed(2)}</td>
                </tr>
            `});let a=t.reduce((e,t)=>e+t.product.price*t.quantity,0);return`
            <div class="invoice-section">
                <h3>Customer Details</h3>
                <p><strong>Name:</strong> ${e.name}</p>
                <p><strong>Address:</strong> ${e.address.replace(/\n/g,"<br>")}</p>
                <p><strong>Contact:</strong> ${e.contact}</p>
                <p><strong>Email:</strong> ${e.email}</p>
            </div>
            <div class="invoice-section">
                <h3>Order Details</h3>
                <table class="invoice-table" aria-label="Order details table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product</th>
                            <th>Unit Price</th>
                            <th>Qty</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${i}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colspan="4" style="text-align:right;">Total</th>
                            <th>Rs.${a.toFixed(2)}</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div class="invoice-section" style="margin-top:1rem; font-style: italic; color: #7f50be;">
                <p>Thank you for shopping at Elegance Store!</p>
            </div>
        `}({name:d.name.value.trim(),address:d.address.value.trim(),contact:d.contact.value.trim(),email:d.email.value.trim()},i),m.classList.add("active"),m.scrollIntoView({behavior:"smooth"})}}),p.addEventListener("click",()=>{m.classList.contains("active")&&window.print()}),r.forEach(e=>{e.addEventListener("click",()=>{r.forEach(e=>{e.classList.remove("active"),e.setAttribute("aria-pressed","false")}),e.classList.add("active"),e.setAttribute("aria-pressed","true"),v(e.getAttribute("data-category"))})}),n.addEventListener("input",e=>{L(e.target.value.trim().toLowerCase())}),v("all"),E()})();
//# sourceMappingURL=Elegant store.e6a98661.js.map
