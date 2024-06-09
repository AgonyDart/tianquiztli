import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = "https://creqcxmfvsxlbvqpkyeo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNyZXFjeG1mdnN4bGJ2cXBreWVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY3NTQ3MzQsImV4cCI6MjAzMjMzMDczNH0.j7Zpkz96-WD_1eJnilt0iwGGbtAPErUeQTQtbGnQGI0";
const supabase = createClient(supabaseUrl, supabaseKey);

export async function login() {
  let { data: users, error } = await supabase.from("user").select("*");
  let email = document.querySelector(".login__input[type=email]").value;
  let password = document.querySelector(".login__input[type=password]").value;
  users = users.filter((user) => user.email === email);
  if (users.length === 0) {
    alert("Usuario no encontrado");
  } else {
    if (users[0].password === password) {
      document.querySelector(".login__input[type=email]").value = "";
      document.querySelector(".login__input[type=password]").value = "";
      alert("Bienvenido" + users[0].email);
    } else {
      alert("Contraseña incorrecta");
    }
  }
}

export async function signUp() {
  let email = document.querySelector(".login__input[type=email]").value;
  let password = document.querySelector(".login__input[type=password]").value;
  const { data, error } = await supabase
    .from("user")
    .insert([{ email: email, password: password }])
    .select();
  if (error) {
    console.error(error);
  } else {
    alert("Usuario creado");
    document.querySelector(".login__input[type=email]").value = "";
    document.querySelector(".login__input[type=password]").value = "";
    console.log(data);
  }
}
