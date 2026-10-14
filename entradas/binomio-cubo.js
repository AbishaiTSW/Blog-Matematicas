contenidoEntrada = `
<section>
    <h2>Binomio al Cubo</h2>
    <p>La fórmula del binomio al cubo es: (a + b)³ = a³ + 3a²b + 3ab² + b³</p>
    <h3>Subtítulo</h3>
    <p>Ejemplo : </p>
    <li onclick="resaltarElemento(this)">
        <strong>1) (y + 4)³</strong>
        <div class="detalle-paso">
            <ul>
                <li>Término 1 (a): y → y² → y³</li>
                <li>Término 2 (b): 4 → 16 → 64</li>
                <li>Triple producto 3a²b: 3(y²)(4) = 12y²</li>
                <li>Triple producto 3ab²: 3(y)(16) = 48y</li>
            </ul>
            <p style="background:none; padding:0; margin:5px 0;">(a + b)³ = a³ + 3a²b + 3ab² + b³</p>
            <strong>Resultado:</strong> y³ + 12y² + 48y + 64
        </div>
    </li>
</section>`;