import React, { useState } from "react";
import Button from "@mui/material/Button";

function App() {
  const [cart, setCart] = useState([]);
  const [selectedColor, setSelectedColor] = useState("blanco");
  const [selectedSize, setSelectedSize] = useState("M");
  const [image, setImage] = useState(null);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`Producto agregado: ${product.name}`);
  };

  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const product = {
    name: "Camisetas Personalizadas",
    description:
      "Camisetas diseñadas para expresar tu estilo único. ¡Diseñamos tu camiseta a tu gusto!",
    price: 25.99,
  };

  // Imagenes del producto según el color seleccionado
  const images = {
    blanco:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtaXNldGElMjBibGFuY2F8ZW58MHx8MHx8fDA%3D",
    negro:
      "https://images.unsplash.com/photo-1618517351616-38fb9c5210c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtaXNldGElMjBuZWdyYXxlbnwwfHwwfHx8MA%3D%3D",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "2rem",
        position: "relative",
        minHeight: "100vh",
      }}
    >
      {/* Fondo difuso */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(https://plus.unsplash.com/premium_photo-1673356302067-aac3b545a362?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FtaXNldGFzfGVufDB8fDB8fHww)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(5px)",
          zIndex: -1,
        }}
      ></div>

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: -1,
        }}
      ></div>

      {/* Presentación del producto */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "2rem",
          zIndex: 1,
          color: "white",
        }}
      >
        <h1>Bienvenidos a ExpressT-Shirt de Alejandro López Flores</h1>
        <p style={{ fontSize: "1.2rem" }}>
          Creemos en la inclusión y la expresión personal. Nuestras camisetas
          personalizadas están diseñadas para que cada persona pueda mostrar su
          estilo único sin restricciones. Nuestro compromiso es ofrecer
          productos que sean accesibles y adecuados para todos.
        </p>
        <h2>¡Hazte con tu camiseta personalizada!</h2>
      </div>

      {/* Detalles del producto */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          padding: "2rem",
          borderRadius: "8px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          width: "300px",
          zIndex: 1,
        }}
      >
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "600",
            marginBottom: "1rem",
            color: "#ff6f61",
          }}
        >
          {product.name}
        </h2>
        <img
          src={images[selectedColor]}
          alt="Camiseta Personalizada"
          style={{
            maxWidth: "100%",
            height: "auto",
            objectFit: "cover", // Esta propiedad asegura que la imagen se ajuste bien
            borderRadius: "8px",
            marginBottom: "1rem",
          }}
        />
        <p style={{ marginBottom: "1rem", textAlign: "center", color: "#333" }}>
          {product.description}
        </p>
        <p
          style={{
            fontSize: "1.2rem",
            fontWeight: "bold",
            marginBottom: "1rem",
          }}
        >
          ${product.price}
        </p>

        {/* Selector de color */}
        <div style={{ marginBottom: "1rem" }}>
          <label style={{ color: "#333" }}>
            Selecciona el color de la camiseta:{" "}
          </label>
          <select
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
            style={{
              padding: "0.5rem",
              marginLeft: "0.5rem",
              backgroundColor: "#fff",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          >
            <option value="blanco">Blanco</option>
            <option value="negro">Negro</option>
          </select>
        </div>

        {/* Selector de talla */}
        <div style={{ marginBottom: "1rem" }}>
          <label style={{ color: "#333" }}>Selecciona la talla: </label>
          <select
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
            style={{
              padding: "0.5rem",
              marginLeft: "0.5rem",
              backgroundColor: "#fff",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          >
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </div>

        {/* Opción para subir imagen personalizada */}
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="image-upload" style={{ color: "#333" }}>
            Sube tu imagen personalizada:
          </label>
          <input
            type="file"
            id="image-upload"
            onChange={handleImageUpload}
            style={{ marginLeft: "0.5rem" }}
          />
        </div>

        {/* Mostrar la imagen personalizada si existe */}
        {image && (
          <div style={{ marginBottom: "1rem" }}>
            <h3 style={{ color: "#333" }}>Imagen Personalizada:</h3>
            <img
              src={image}
              alt="Imagen personalizada"
              style={{ maxWidth: "100%", borderRadius: "8px" }}
            />
          </div>
        )}

        {/* Botón de agregar al carrito */}
        <Button
          variant="contained"
          color="primary"
          onClick={() =>
            addToCart({ ...product, color: selectedColor, size: selectedSize })
          }
          style={{
            backgroundColor: "#ff6f61",
            width: "200px",
            marginBottom: "1rem",
          }}
        >
          Agregar al carrito
        </Button>

        {/* Mostrar los productos añadidos al carrito */}
        <h3 style={{ color: "#333" }}>Productos en el carrito:</h3>
        {cart.length > 0 ? (
          <div style={{ marginTop: "1rem" }}>
            {cart.map((item, index) => (
              <div
                key={index}
                style={{ marginBottom: "1rem", textAlign: "center" }}
              >
                <p>
                  {item.name} - {item.color} - {item.size} - ${item.price}
                </p>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => removeFromCart(index)}
                  style={{ backgroundColor: "#f44336" }}
                >
                  Eliminar
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <p style={{ color: "#666" }}>Tu carrito está vacío.</p>
        )}
      </div>
    </div>
  );
}

export default App;
