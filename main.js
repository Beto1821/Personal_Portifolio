document.addEventListener("DOMContentLoaded", function() {
  // Função para carregar um componente HTML em um elemento
  const loadComponent = (elementId, filePath) => {
    fetch(filePath)
      .then(response => response.text())
      .then(data => {
        document.getElementById(elementId).innerHTML = data;
      })
      .catch(error => console.error(`Erro ao carregar ${filePath}:`, error));
  };

  // Carrega o header e o footer
  loadComponent("header-placeholder", "/header.html");
  loadComponent("footer-placeholder", "/footer.html");
});