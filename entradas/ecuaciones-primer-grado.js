const contenidoEntrada = `<section>
    <h3 style="color: #8b4513; margin-top: 20px;">Procedimiento General</h3>
    <p>Para resolver cualquier ecuación de primer grado (o lineal), se siguen los siguientes pasos metodológicos:</p>
    <ul style="line-height: 1.6; margin-bottom: 20px;">
        <li><strong>Eliminar signos de agrupación:</strong> Si existen paréntesis o corchetes, se resuelven aplicando la propiedad distributiva.</li>
        <li><strong>Eliminar denominadores (si los hay):</strong> Se multiplica toda la ecuación por el mínimo común múltiplo (mcm) de los denominadores para convertirla en una ecuación entera.</li>
        <li><strong>Transposición de términos:</strong> Se agrupan todos los términos que contienen la incógnita (x) en un miembro de la ecuación (usualmente el izquierdo) y los términos independientes (números) en el otro miembro.</li>
        <li><strong>Reducción de términos semejantes:</strong> Se simplifican ambos lados sumando o restando los coeficientes.</li>
        <li><strong>Despeje de la incógnita:</strong> Se aísla por completo la variable dividiendo ambos lados por el coeficiente que la acompaña.</li>
    </ul>

    <h3 style="color: #8b4513; margin-top: 25px;">Ejemplos por Tipo</h3>

    <div style="background-color: #f9fafb; border-left: 4px solid #8b4513; padding: 15px; margin-bottom: 20px; border-radius: 4px;">
        <h4 style="color: #1f2937; margin-top: 0;">1. Ecuación Entera</h4>
        <p><strong>Resolver:</strong> 5x - 3 = 2x + 12</p>
        <p><strong>Procedimiento:</strong></p>
        <ul style="margin-bottom: 0;">
            <li>5x - 2x = 12 + 3 (Transposición)</li>
            <li>3x = 15 (Reducción)</li>
            <li>x = 15 / 3 &rArr; <strong>x = 5</strong> (Despeje)</li>
        </ul>
    </div>

    <div style="background-color: #f9fafb; border-left: 4px solid #8b4513; padding: 15px; margin-bottom: 20px; border-radius: 4px;">
        <h4 style="color: #1f2937; margin-top: 0;">2. Ecuación Fraccionaria</h4>
        <p><strong>Resolver:</strong> (x / 2) + (x / 4) = 6</p>
        <p><strong>Procedimiento:</strong></p>
        <ul style="margin-bottom: 0;">
            <li>mcm de 2 y 4 es 4. Multiplicando todo por 4: 2x + x = 24</li>
            <li>3x = 24 (Reducción)</li>
            <li>x = 24 / 3 &rArr; <strong>x = 8</strong> (Despeje)</li>
        </ul>
    </div>

    <div style="background-color: #f9fafb; border-left: 4px solid #8b4513; padding: 15px; margin-bottom: 20px; border-radius: 4px;">
        <h4 style="color: #1f2937; margin-top: 0;">3. Ecuación con Signos de Agrupación</h4>
        <p><strong>Resolver:</strong> 3(x - 2) - 2(x + 1) = 5</p>
        <p><strong>Procedimiento:</strong></p>
        <ul style="margin-bottom: 0;">
            <li>3x - 6 - 2x - 2 = 5 (Propiedad distributiva)</li>
            <li>x - 8 = 5 (Reducción)</li>
            <li>x = 5 + 8 &rArr; <strong>x = 13</strong> (Despeje)</li>
        </ul>
    </div>

    <div style="background-color: #f9fafb; border-left: 4px solid #8b4513; padding: 15px; margin-bottom: 20px; border-radius: 4px;">
        <h4 style="color: #1f2937; margin-top: 0;">4. Ecuación con Literales</h4>
        <p><strong>Resolver para x:</strong> ax + b = cx + d</p>
        <p><strong>Procedimiento:</strong></p>
        <ul style="margin-bottom: 0;">
            <li>ax - cx = d - b (Agrupación de términos con x)</li>
            <li>x(a - c) = d - b (Factor común)</li>
            <li><strong>x = (d - b) / (a - c)</strong> (Despeje final, con a &ne; c)</li>
        </ul>
    </div>

    <h3 style="color: #8b4513; margin-top: 30px;">Problema de Planteamiento Propio: El Café con Leche Perfecto</h3>
    <p>Para preparar una taza grande de café con leche ideal de 400 ml, se requiere que la cantidad de leche represente exactamente el 75% del total de la mezcla. ¿Cuántos mililitros de café y cuántos mililitros de leche se deben utilizar?</p>

    <div style="background-color: #fffbeb; border: 1px solid #d2b48c; padding: 15px; border-radius: 6px; margin-top: 15px;">
        <p style="margin-top: 0;"><strong>Paso 1: Incógnita</strong><br>
        Sea x = cantidad de café en mililitros.<br>
        La leche es el 75% del total (400 ml), es decir, 0.75 × 400 = 300 ml, o bien expresado algebraicamente en función del café: si la leche es 3 veces el café (75% leche y 25% café), la cantidad de leche es 3x.</p>

        <p><strong>Paso 2: Traducción</strong><br>
        La suma del café y la leche debe dar el volumen total de la taza de café con leche perfecto (400 ml).</p>

        <p><strong>Paso 3: Ecuación</strong><br>
        x + 3x = 400</p>

        <p><strong>Paso 4: Solución</strong><br>
        4x = 400<br>
        x = 400 / 4 &rArr; <strong>x = 100 ml (de café)</strong><br>
        Leche: 3(100) = <strong>300 ml (de leche)</strong></p>

        <p style="margin-bottom: 0;"><strong>Paso 5: Validación contra el enunciado</strong><br>
        Comprobamos sumando ambos ingredientes: 100 ml (café) + 300 ml (leche) = 400 ml totales. Además, calculamos el porcentaje de leche: 300 / 400 = 0.75 = 75%, lo cual valida perfectamente el enunciado original.</p>
    </div>
</section>`;