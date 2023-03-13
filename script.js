const MAX_ITEMS = 5;
      const listElement = document.getElementById("list");
      const addButton = document.querySelector("button");

      function addItem() {
        const inputElement = document.getElementById("input");
        const value = inputElement.value.trim();
        if (value) {
          const itemElement = document.createElement("li");
          const textElement = document.createElement("span");
          textElement.textContent = value;
          itemElement.appendChild(textElement);
          const closeButton = document.createElement("button");
          closeButton.textContent = "x";
          closeButton.classList.add("close");
          closeButton.addEventListener("click", () => {
            itemElement.remove();
            if (listElement.children.length < MAX_ITEMS) {
              addButton.disabled = false;
            }
          });
          itemElement.appendChild(closeButton);
          listElement.appendChild(itemElement);
          inputElement.value = "";
          if (listElement.children.length >= MAX_ITEMS) {
            addButton.disabled = true;
          }
        }
      }
      