contenidoEntrada = `
<section>
    <h2>Binomio con Término Común</h2>
    <p>La fórmula es: (x + a)(x + b) = x² + (a+b)x + ab</p>
    <h3>Subtítulo</h3>
    <p>Ejemplo : </p>
    <li onclick="resaltarElemento(this)">
        <strong>1) (5p + 8)(5p + 6)</strong>
        <div class="detalle-paso">
            <table style="border-collapse: collapse; margin: 10px 0; text-align: center; width: 100%;">
                <tr>
                    <th style="border: 1px solid #333; padding: 8px; background-color: #f7f3e9;"></th>
                    <th style="border: 1px solid #333; padding: 8px; background-color: #f7f3e9;">5p</th>
                    <th style="border: 1px solid #333; padding: 8px; background-color: #f7f3e9;">6</th>
                </tr>
                <tr>
                    <th style="border: 1px solid #333; padding: 8px; background-color: #f7f3e9;">5p</th>
                    <td style="border: 1px solid #333; padding: 8px;">25p²</td>
                    <td style="border: 1px solid #333; padding: 8px; background-color: #fef3c7;">30p</td>
                </tr>
                <tr>
                    <th style="border: 1px solid #333; padding: 8px; background-color: #f7f3e9;">8</th>
                    <td style="border: 1px solid #333; padding: 8px; background-color: #fef3c7;">40p</td>
                    <td style="border: 1px solid #333; padding: 8px;">48</td>
                </tr>
            </table>
            <p style="background:none; padding:0; margin:8px 0;">
                (x + a)(x + b) = x² + (<strong>30p + 40p</strong>) + ab<br>
                = 25p² + <strong>70p</strong> + 48
            </p>
            <p style="background:none; padding:0; margin:5px 0;"><strong>Resultado:</strong> 25p² + 70p + 48</p>
        </div>
    </li>
</section>`;