<%- include('../partials/header') %>

<form action="/items/<%= item.id %>?_method=PUT" >
    <input type="text" name="item" value="<%= item.item %>">
    <button type="submit">Update Item</button>
</form>

<%- include('../partials/footer') %>