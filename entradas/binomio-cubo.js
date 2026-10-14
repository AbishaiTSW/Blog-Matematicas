contenidoEntrada = `
<section>
    <h2>Binomio al Cubo</h2>
    <p>La fórmula del binomio al cubo es: (a + b)³ = a³ + 3a²b + 3ab² + b³</p>
    <h3>Subtítulo</h3>
    <p>Ejemplo : </p>
    <li onclick="resaltarElemento(this)">
        <strong>1) (y + 4)³</strong>
        <div class="detalle-paso">
            <table style="border-collapse: collapse; margin: 10px 0; text-align: left; width: 100%;">
                <tr>
                    <th style="border: 1px solid #333; padding: 8px; background-color: #f7f3e9;">Componente</th>
                    <th style="border: 1px solid #333; padding: 8px; background-color: #f7f3e9;">Desarrollo</th>
                </tr>
                <tr>
                    <td style="border: 1px solid #333; padding: 8px; font-weight: bold;">Término 1 (a³)</td>
                    <td style="border: 1px solid #333; padding: 8px;">y³</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #333; padding: 8px; font-weight: bold;">Triple producto (3a²b)</td>
                    <td style="border: 1px solid #333; padding: 8px;">3(y²)(4) = <strong>12y²</strong></td>
                </tr>
                <tr>
                    <td style="border: 1px solid #333; padding: 8px; font-weight: bold;">Triple producto (3ab²)</td>
                    <td style="border: 1px solid #333; padding: 8px;">3(y)(16) = <strong>48y</strong></td>
                </tr>
                <tr>
                    <td style="border: 1px solid #333; padding: 8px; font-weight: bold;">Término 2 (b³)</td>
                    <td style="border: 1px solid #333; padding: 8px;">4³ = 64</td>
                </tr>
            </table>
            <p style="background:none; padding:0; margin:8px 0;">(a + b)³ = a³ + 3a²b + 3ab² + b³</p>
            <p style="background:none; padding:0; margin:5px 0;"><strong>Resultado:</strong> y³ + 12y² + 48y + 64</p>
        </div>
    </li>
</section>`;