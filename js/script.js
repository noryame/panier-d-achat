document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll(".item");
  
    items.forEach(item => {
      const increaseBtn = item.querySelector(".increase");
      const decreaseBtn = item.querySelector(".decrease");
      const removeBtn = item.querySelector(".remove");
      const likeBtn = item.querySelector(".like");
      const count = item.querySelector(".count");
      let price = 10;  
  
      increaseBtn.addEventListener("click", function() {
        count.textContent++;
        updateTotal();
      });
  
      decreaseBtn.addEventListener("click", function() {
        if (count.textContent > 1) {
          count.textContent--;
          updateTotal();
        }
      });
  
      removeBtn.addEventListener("click", function() {
        item.remove();
        updateTotal();
      });
  
      likeBtn.addEventListener("click", function() {
        likeBtn.classList.toggle("liked");
      });
  
      function updateTotal() {
        const totalPrice = document.getElementById("totalPrice");
        let total = 0;
        items.forEach(item => {
          const count = parseInt(item.querySelector(".count").textContent);
          total += count * price;
        });
        totalPrice.textContent = total;
      }
    });
  });
  