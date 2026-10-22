const contenidoEntrada = `
    <h2 style="color: #5C2C16;">Guía Completa de Factorización II</h2>
    <p>En esta ocasión profundizaremos en los casos fundamentales del álgebra: la <strong>Suma de Cubos</strong>, la <strong>Diferencia de Cubos</strong>, los <strong>Trinomios de la forma x<sup>2</sup> + bx + c</strong> y los <strong>Trinomios de la forma ax<sup>2</sup> + bx + c (método de aspa simple)</strong>.</p>
    
    <hr style="border: 1px dashed #A0522D; margin: 20px 0;">

    <h3 style="color: #8B4513;">1. Suma de Cubos</h3>
    
    <h4 style="color: #5C2C16;">¿Cómo reconocerlo?</h4>
    <ul>
        <li>La expresión consta exactamente de <strong>dos términos</strong> unidos por un signo de suma (+).</li>
        <li>Ambos términos poseen <strong>raíz cúbica exacta</strong> (coeficientes con raíz entera y exponentes divisibles entre 3).</li>
    </ul>
    
    <h4 style="color: #5C2C16;">Procedimiento</h4>
    <ol>
        <li>Extrae la raíz cúbica de ambos términos para formar un binomio con suma: (a + b).</li>
        <li>Construye el trinomio con la regla de signos alternados: el cuadrado del primero, <strong>menos</strong> el producto de ambos, más el cuadrado del segundo: (a<sup>2</sup> - ab + b<sup>2</sup>).</li>
    </ol>

    <h4 style="color: #5C2C16;">Ejemplo Resuelto</h4>
    <p>Factorizar la expresión: <strong>x<sup>3</sup> + 8</strong></p>
    <p>1. Raíz cúbica del primer término: ∛(x<sup>3</sup>) = x.</p>
    <p>2. Raíz cúbica del segundo término: ∛8 = 2.</p>
    <p>3. Formamos los factores: (x + 2)((x)<sup>2</sup> - (x)(2) + (2)<sup>2</sup>).</p>
    <p style="background-color: #F5E6D3; padding: 10px; border-radius: 8px; font-weight: bold;">
        Resultado factorizado: (x + 2)(x<sup>2</sup> - 2x + 4)
    </p>

    <h4 style="color: #5C2C16;">Comprobación</h4>
    <p>(x + 2)(x<sup>2</sup> - 2x + 4) = x(x<sup>2</sup> - 2x + 4) + 2(x<sup>2</sup> - 2x + 4) = x<sup>3</sup> - 2x<sup>2</sup> + 4x + 2x<sup>2</sup> - 4x + 8 = x<sup>3</sup> + 8.</p>

    <hr style="border: 1px dashed #A0522D; margin: 20px 0;">

    <h3 style="color: #8B4513;">2. Diferencia de Cubos</h3>
    
    <h4 style="color: #5C2C16;">¿Cómo reconocerlo?</h4>
    <ul>
        <li>La expresión consta exactamente de <strong>dos términos</strong> unidos por un signo de resta (-).</li>
        <li>Ambos términos poseen <strong>raíz cúbica exacta</strong>.</li>
    </ul>
    
    <h4 style="color: #5C2C16;">Procedimiento</h4>
    <ol>
        <li>Extrae la raíz cúbica de ambos términos para formar un binomio con resta: (a - b).</li>
        <li>Construye el trinomio con todos sus signos positivos: el cuadrado del primero, <strong>más</strong> el producto de ambos, más el cuadrado del segundo: (a<sup>2</sup> + ab + b<sup>2</sup>).</li>
    </ol>

    <h4 style="color: #5C2C16;">Ejemplo Resuelto</h4>
    <p>Factorizar la expresión: <strong>8x<sup>3</sup> - 27</strong></p>
    <p>1. Raíz cúbica del primer término: ∛(8x<sup>3</sup>) = 2x.</p>
    <p>2. Raíz cúbica del segundo término: ∛27 = 3.</p>
    <p>3. Formamos los factores: (2x - 3)((2x)<sup>2</sup> + (2x)(3) + (3)<sup>2</sup>).</p>
    <p style="background-color: #F5E6D3; padding: 10px; border-radius: 8px; font-weight: bold;">
        Resultado factorizado: (2x - 3)(4x<sup>2</sup> + 6x + 9)
    </p>

    <h4 style="color: #5C2C16;">Comprobación</h4>
    <p>(2x - 3)(4x<sup>2</sup> + 6x + 9) = 2x(4x<sup>2</sup> + 6x + 9) - 3(4x<sup>2</sup> + 6x + 9) = 8x<sup>3</sup> + 12x<sup>2</sup> + 18x - 12x<sup>2</sup> - 18x - 27 = 8x<sup>3</sup> - 27.</p>

    <hr style="border: 1px dashed #A0522D; margin: 20px 0;">

    <h3 style="color: #8B4513;">3. Trinomios de la forma x<sup>2</sup> + bx + c (Método de Aspa Simple)</h3>
    
    <h4 style="color: #5C2C16;">¿Cómo reconocerlo?</h4>
    <p>Es un trinomio ordenado donde el coeficiente del término cuadrático (x<sup>2</sup>) es estrictamente <strong>1</strong>.</p>
    
    <h4 style="color: #5C2C16;">Procedimiento</h4>
    <ul>
        <li>Descompón x<sup>2</sup> en (x)(x) y colócalo en la columna izquierda.</li>
        <li>Busca dos factores del término independiente (c) que multiplicados den c y sumados o restados en aspa den el término central (bx).</li>
    </ul>

    <h4 style="color: #5C2C16;">Ejemplo Resuelto</h4>
    <p>Factorizar el trinomio: <strong>x<sup>2</sup> + 7x + 12</strong></p>
    <p>Comprobamos mediante la tabla de aspa simple:</p>

    <table style="margin: 15px auto; border-collapse: collapse; text-align: center; font-family: monospace; font-size: 16px; background-color: #FAF0E6; border: 2px solid #8B4513;">
        <tr style="border-bottom: 1px solid #A0522D;">
            <th style="padding: 8px 15px; color: #5C2C16;">Factores Izquierda</th>
            <th style="padding: 8px 15px; color: #5C2C16;">Cruz / Aspa</th>
            <th style="padding: 8px 15px; color: #5C2C16;">Factores Derecha</th>
            <th style="padding: 8px 15px; color: #5C2C16;">Productos en Cruz</th>
        </tr>
        <tr>
            <td style="padding: 8px 15px; font-weight: bold;">x</td>
            <td style="padding: 8px 15px;">╲</td>
            <td style="padding: 8px 15px; font-weight: bold;">3</td>
            <td style="padding: 8px 15px;">(x)(3) = +3x</td>
        </tr>
        <tr>
            <td style="padding: 8px 15px; font-weight: bold;">x</td>
            <td style="padding: 8px 15px;">╱</td>
            <td style="padding: 8px 15px; font-weight: bold;">4</td>
            <td style="padding: 8px 15px;">(x)(4) = +4x</td>
        </tr>
        <tr style="border-top: 2px solid #8B4513; background-color: #F5E6D3;">
            <td colspan="3" style="padding: 8px; text-align: right; font-weight: bold;">Suma total del término central:</td>
            <td style="padding: 8px; font-weight: bold; color: #8B4513;">+3x + 4x = +7x</td>
        </tr>
    </table>

    <p style="background-color: #F5E6D3; padding: 10px; border-radius: 8px; font-weight: bold; text-align: center;">
        Resultado factorizado: (x + 3)(x + 4)
    </p>

    <h4 style="color: #5C2C16;">Comprobación</h4>
    <p>(x + 3)(x + 4) = x<sup>2</sup> + 4x + 3x + 12 = x<sup>2</sup> + 7x + 12.</p>

    <hr style="border: 1px dashed #A0522D; margin: 20px 0;">

    <h3 style="color: #8B4513;">4. Trinomios de la forma ax<sup>2</sup> + bx + c (Método de Aspa Simple)</h3>
    
    <h4 style="color: #5C2C16;">¿Cómo reconocerlo?</h4>
    <p>Es un trinomio donde el coeficiente principal del término cuadrático (a) es <strong>diferente de 1</strong>.</p>
    
    <h4 style="color: #5C2C16;">Procedimiento</h4>
    <ul>
        <li>Descompón el término cuadrático (ax<sup>2</sup>) y el término independiente (c) en factores verticales.</li>
        <li>Multiplica en cruz y verifica que la suma algebraica coincida con el término central (bx). Agrupa en forma horizontal.</li>
    </ul>

    <h4 style="color: #5C2C16;">Ejemplo Resuelto</h4>
    <p>Factorizar la expresión: <strong>6x<sup>2</sup> + 11x + 4</strong></p>
    <p>Estructuramos y comprobamos mediante la tabla de aspa simple:</p>

    <table style="margin: 15px auto; border-collapse: collapse; text-align: center; font-family: monospace; font-size: 16px; background-color: #FAF0E6; border: 2px solid #8B4513;">
        <tr style="border-bottom: 1px solid #A0522D;">
            <th style="padding: 8px 15px; color: #5C2C16;">Factores Izquierda</th>
            <th style="padding: 8px 15px; color: #5C2C16;">Cruz / Aspa</th>
            <th style="padding: 8px 15px; color: #5C2C16;">Factores Derecha</th>
            <th style="padding: 8px 15px; color: #5C2C16;">Productos en Cruz</th>
        </tr>
        <tr>
            <td style="padding: 8px 15px; font-weight: bold;">3x</td>
            <td style="padding: 8px 15px;">╲</td>
            <td style="padding: 8px 15px; font-weight: bold;">4</td>
            <td style="padding: 8px 15px;">(3x)(1) = +3x</td>
        </tr>
        <tr>
            <td style="padding: 8px 15px; font-weight: bold;">2x</td>
            <td style="padding: 8px 15px;">╱</td>
            <td style="padding: 8px 15px; font-weight: bold;">1</td>
            <td style="padding: 8px 15px;">(2x)(4) = +8x</td>
        </tr>
        <tr style="border-top: 2px solid #8B4513; background-color: #F5E6D3;">
            <td colspan="3" style="padding: 8px; text-align: right; font-weight: bold;">Suma total del término central:</td>
            <td style="padding: 8px; font-weight: bold; color: #8B4513;">+3x + 8x = +11x</td>
        </tr>
    </table>

    <p style="background-color: #F5E6D3; padding: 10px; border-radius: 8px; font-weight: bold; text-align: center;">
        Resultado factorizado: (3x + 4)(2x + 1)
    </p>

    <h4 style="color: #5C2C16;">Comprobación</h4>
    <p>(3x + 4)(2x + 1) = 6x<sup>2</sup> + 3x + 8x + 4 = 6x<sup>2</sup> + 11x + 4.</p>

    <h3 style="color: #8B4513;">Estrategia de Factorización</h3>
    <p>Cuando te enfrentas a un polinomio y no sabes por dónde empezar, seguir un orden lógico basado en la estructura y el número de términos te permitirá identificar rápidamente qué caso aplicar (integrando los temas de Factorización I y II):</p>
    
    <ol>
        <li>
            <strong>Paso Universal (Regla de Oro):</strong> Revisa siempre si todos los términos de la expresión comparten un divisor numérico o una variable en común. Si es así, aplica primero <strong>Factor Común</strong>.
        </li>
        <br>
        <li>
            <strong>Analiza según el número de términos de la expresión (o del resultado tras extraer el factor común):</strong>
            <ul>
                <li>
                    <strong>Si la expresión tiene 2 términos:</strong>
                    <ul>
                        <li>¿Es una resta con raíces cuadradas exactas? &rarr; Aplica <strong>Diferencia de Cuadrados</strong>: <em>a<sup>2</sup> - b<sup>2</sup> = (a + b)(a - b)</em>.</li>
                        <li>¿Es una suma o resta con raíces cúbicas exactas? &rarr; Aplica <strong>Suma o Diferencia de Cubos</strong>: <span>a<sup>3</sup> &plusmn; b<sup>3</sup> = (a &plusmn; b)(a<sup>2</sup> ∓ ab + b<sup>2</sup>)</span>.</li>
                    </ul>
                </li>
                <br>
                <li>
                    <strong>Si la expresión tiene 3 términos (Trinomios):</strong>
                    <ul>
                        <li>¿El coeficiente del término cuadrático es 1 y el término del medio es el doble producto de las raíces de los extremos? &rarr; Aplica <strong>Trinomio Cuadrado Perfecto (TCP)</strong>: <em>a<sup>2</sup> &plusmn; 2ab + b<sup>2</sup> = (a &plusmn; b)<sup>2</sup></em>.</li>
                        <li>¿El coeficiente del término cuadrático es 1 pero NO cumple como TCP? &rarr; Busca dos números que multiplicados den el término independiente y sumados den el término lineal: <strong>Trinomio de la forma x<sup>2</sup> + bx + c</strong>.</li>
                        <li>¿El coeficiente del término cuadrático es diferente de 1 (a &ne; 1)? &rarr; Aplica el <strong>Método de Aspa Simple</strong>: <strong>Trinomio de la forma ax<sup>2</sup> + bx + c</strong>.</li>
                    </ul>
                </li>
            </ul>
        </li>
    </ol>
`;