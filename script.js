const MAX_ITEMS = 5;
      const listElement = document.getElementById("list");
      const addButton = document.querySelector("button");

      function addItem() {
        const inputElement = document.getElementById("input");
        const value = inputElement.value.trim();
        if (value) {
          let itemElement = document.createElement("li");
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
          const editButton = document.createElement("button");
          editButton.textContent = "Edit";
          editButton.classList.add("edit");
          editButton.addEventListener("click", () => {
            const editText = prompt("Enter the updated task:", textElement.textContent);
            if (editText) {
              textElement.textContent = editText;
            }
          });
          itemElement.appendChild(closeButton);
          itemElement.appendChild(editButton);
          listElement.appendChild(itemElement);
          inputElement.value = "";
          if (listElement.children.length >= MAX_ITEMS) {
            addButton.disabled = true;
          }
        }
      }
      
      
      