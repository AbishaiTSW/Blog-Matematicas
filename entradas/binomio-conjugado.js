contenidoEntrada = `
<section>
    <h2>Binomio Conjugado</h2>
    <p>La fórmula del binomio conjugado es: (a + b)(a - b) = a² - b²</p>
    <h3>Subtítulo</h3>
    <p>Ejemplo : </p>
    <li onclick="resaltarElemento(this)">
        <strong>1) (7n + 2)(7n - 2)</strong>
        <div class="detalle-paso">
            <table style="border-collapse: collapse; margin: 10px 0; text-align: center; width: 100%;">
                <tr>
                    <th style="border: 1px solid #333; padding: 8px; background-color: #f7f3e9;"></th>
                    <th style="border: 1px solid #333; padding: 8px; background-color: #f7f3e9;">7n</th>
                    <th style="border: 1px solid #333; padding: 8px; background-color: #f7f3e9;">-2</th>
                </tr>
                <tr>
                    <th style="border: 1px solid #333; padding: 8px; background-color: #f7f3e9;">7n</th>
                    <td style="border: 1px solid #333; padding: 8px;">49n²</td>
                    <td style="border: 1px solid #333; padding: 8px; background-color: #fef3c7;">-14n</td>
                </tr>
                <tr>
                    <th style="border: 1px solid #333; padding: 8px; background-color: #f7f3e9;">2</th>
                    <td style="border: 1px solid #333; padding: 8px; background-color: #fef3c7;">14n</td>
                    <td style="border: 1px solid #333; padding: 8px;">-4</td>
                </tr>
            </table>
            <p style="background:none; padding:0; margin:8px 0;">
                (a + b)(a - b) = a² + (<strong>14n - 14n</strong>) - b²<br>
                = (7n)² <strong>- 0</strong> - (2)²
            </p>
            <p style="background:none; padding:0; margin:5px 0;"><strong>Resultado:</strong> 49n² - 4</p>
        </div>
    </li>
</section>`;