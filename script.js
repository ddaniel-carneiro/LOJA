document.getElementById('add-product-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Pega que preenchi
  const name = document.getElementById('name').value;
  const barcode = document.getElementById('barcode').value;
  const quantity = document.getElementById('quantity').value;

  // Adiciona ao estoque
  const inventoryList = document.getElementById('inventory-list');
  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${name}</td>
    <td>${barcode}</td>
    <td>${quantity}</td>
  `;

  inventoryList.appendChild(row);

  // Limpa o formulário
  document.getElementById('add-product-form').reset();
});
