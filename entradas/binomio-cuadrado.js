contenidoEntrada = `
<section>
    <h2>Binomio al Cuadrado</h2>
    <p>La fórmula del binomio al cuadrado es: (a + b)² = a² + 2ab + b²</p>
    <h3>Subtítulo</h3>
    <p>Ejemplo : </p>
    <li onclick="resaltarElemento(this)">
        <strong>1) (r - 5)²</strong>
        <div class="detalle-paso">
            <table style="border-collapse: collapse; margin: 10px 0; text-align: center; width: 100%;">
                <tr>
                    <th style="border: 1px solid #333; padding: 8px; background-color: #f7f3e9;"></th>
                    <th style="border: 1px solid #333; padding: 8px; background-color: #f7f3e9;">r</th>
                    <th style="border: 1px solid #333; padding: 8px; background-color: #f7f3e9;">-5</th>
                </tr>
                <tr>
                    <th style="border: 1px solid #333; padding: 8px; background-color: #f7f3e9;">r</th>
                    <td style="border: 1px solid #333; padding: 8px;">r²</td>
                    <td style="border: 1px solid #333; padding: 8px; background-color: #fef3c7;">-5r</td>
                </tr>
                <tr>
                    <th style="border: 1px solid #333; padding: 8px; background-color: #f7f3e9;">-5</th>
                    <td style="border: 1px solid #333; padding: 8px; background-color: #fef3c7;">-5r</td>
                    <td style="border: 1px solid #333; padding: 8px;">25</td>
                </tr>
            </table>
            <p style="background:none; padding:0; margin:8px 0;">
                (a - b)² = a² + (<strong>-5r - 5r</strong>) + b²<br>
                = r² <strong>- 10r</strong> + 25
            </p>
            <p style="background:none; padding:0; margin:5px 0;"><strong>Resultado:</strong> r² - 10r + 25</p>
        </div>
    </li>
</section>`;