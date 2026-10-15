const contenidoEntrada = `
    <h2 style="color: #5C2C16;">Guía Completa de Factorización I</h2>
    <p>La factorización es el proceso inverso a la multiplicación algebraica. En lugar de desarrollar paréntesis, buscamos descomponer una expresión en factores más simples que, al multiplicarse entre sí, regresen a la original.</p>
    
    <hr style="border: 1px dashed #A0522D; margin: 20px 0;">

    <h3 style="color: #8B4513;">1. Factor Común</h3>
    
    <h4 style="color: #5C2C16;">¿Cómo reconocerlo?</h4>
    <p>Se presenta cuando todos los términos de la expresión comparten elementos en común, ya sea un factor numérico (máximo común divisor de los coeficientes) o letras repetidas con su menor exponente.</p>
    
    <h4 style="color: #5C2C16;">Procedimiento</h4>
    <ul>
        <li>Encuentra el máximo común divisor (MCD) de los coeficientes numéricos.</li>
        <li>Identifica las letras que se repiten en <strong>todos</strong> los términos y selecciona la que tenga el exponente más pequeño.</li>
        <li>Divide cada término original entre el factor común encontrado para obtener los términos que quedarán dentro del paréntesis.</li>
    </ul>

    <h4 style="color: #5C2C16;">Ejemplo Resuelto</h4>
    <p>Factorizar la expresión: <strong>12x<sup>4</sup> - 18x<sup>2</sup></strong></p>
    <p>1. El MCD de 12 y 18 es 6. La letra común con menor exponente es x<sup>2</sup>. Por lo tanto, el factor común es 6x<sup>2</sup>.</p>
    <p>2. Dividimos cada término: (12x<sup>4</sup>) / (6x<sup>2</sup>) = 2x<sup>2</sup> y (-18x<sup>2</sup>) / (6x<sup>2</sup>) = -3.</p>
    <p style="background-color: #F5E6D3; padding: 10px; border-radius: 8px; font-weight: bold;">
        Resultado factorizado: 6x<sup>2</sup>(2x<sup>2</sup> - 3)
    </p>

    <h4 style="color: #5C2C16;">Comprobación (Multiplicando de regreso)</h4>
    <p>6x<sup>2</sup>(2x<sup>2</sup>) + 6x<sup>2</sup>(-3) = 12x<sup>4</sup> - 18x<sup>2</sup> (¡Regresa a la expresión inicial!).</p>

    <hr style="border: 1px dashed #A0522D; margin: 20px 0;">

    <h3 style="color: #8B4513;">2. Trinomio Cuadrado Perfecto (TCP)</h3>
    
    <h4 style="color: #5C2C16;">¿Cómo reconocerlo?</h4>
    <p>Es un trinomio ordenado donde el primer y el tercer término tienen raíces cuadradas exactas (y son positivos), mientras que el término del centro es exactamente el doble producto de esas dos raíces.</p>
    
    <h4 style="color: #5C2C16;">Procedimiento</h4>
    <ul>
        <li>Extrae la raíz cuadrada del primer y del tercer término.</li>
        <li>Verifica que el doble producto de ambas raíces coincida con el valor absoluto del término central.</li>
        <li>Escribe las raíces dentro de un paréntesis separadas por el signo del término central y eleva todo el binomio al cuadrado.</li>
    </ul>

    <h4 style="color: #5C2C16;">Ejemplo Resuelto</h4>
    <p>Factorizar el trinomio: <strong>x<sup>2</sup> + 10x + 25</strong></p>
    <p>1. Raíz del primer término: √(x<sup>2</sup>) = x.</p>
    <p>2. Raíz del tercer término: √25 = 5.</p>
    <p>3. Comprobación del término central: 2(x)(5) = 10x (coincide).</p>
    <p style="background-color: #F5E6D3; padding: 10px; border-radius: 8px; font-weight: bold;">
        Resultado factorizado: (x + 5)<sup>2</sup>
    </p>

    <h4 style="color: #5C2C16;">Comprobación (Multiplicando de regreso)</h4>
    <p>Desarrollamos el binomio al cuadrado: (x)<sup>2</sup> + 2(x)(5) + (5)<sup>2</sup> = x<sup>2</sup> + 10x + 25.</p>

    <hr style="border: 1px dashed #A0522D; margin: 20px 0;">

    <h3 style="color: #8B4513;">3. Diferencia de Cuadrados</h3>
    
    <h4 style="color: #5C2C16;">¿Cómo reconocerlo?</h4>
    <p>Consta exactamente de dos términos separados por un signo de resta (-), donde ambos términos poseen una raíz cuadrada exacta.</p>
    
    <h4 style="color: #5C2C16;">Procedimiento</h4>
    <ul>
        <li>Saca la raíz cuadrada de ambos términos.</li>
        <li>Escribe dos binomios conjugados: uno con la suma de las raíces y otro con la resta de las mismas.</li>
    </ul>

    <h4 style="color: #5C2C16;">Ejemplo Resuelto</h4>
    <p>Factorizar la expresión: <strong>16m<sup>2</sup> - 9</strong></p>
    <p>1. Raíz cuadrada del primer término: √(16m<sup>2</sup>) = 4m.</p>
    <p>2. Raíz cuadrada del segundo término: √9 = 3.</p>
    <p style="background-color: #F5E6D3; padding: 10px; border-radius: 8px; font-weight: bold;">
        Resultado factorizado: (4m + 3)(4m - 3)
    </p>

    <h4 style="color: #5C2C16;">Comprobación (Multiplicando de regreso)</h4>
    <p>Multiplicamos los binomios conjugados: (4m)(4m) + (4m)(-3) + (3)(4m) + (3)(-3) = 16m<sup>2</sup> - 12m + 12m - 9 = 16m<sup>2</sup> - 9.</p>

    <hr style="border: 1px dashed #A0522D; margin: 20px 0;">

    <h3 style="color: #8B4513;">Ida y Regreso (Relación con Productos Notables)</h3>
    <p>En álgebra, el concepto de "Ida y regreso" hace referencia a la relación de reversibilidad (o dualidad) que existe entre los productos notables y la factorización.</p>
    
    <ul>
        <li><strong>La "Ida" (Productos Notables):</strong> Consiste en partir de una multiplicación de polinomios (como binomios) y, aplicando reglas fijas, llegar directamente a un resultado expandido sin necesidad de hacer toda la multiplicación término por término.</li>
        <li><strong>El "Regreso" (Factorización):</strong> Es el proceso inverso. Consiste en partir de la expresión desarrollada (el polinomio resultante) y descomponerla en los factores originales que la originaron.</li>
    </ul>

    <h4 style="color: #5C2C16;">Relación caso por caso: Producto Notable y su inverso</h4>
    <p>A continuación, se relaciona cada caso de producto notable (ida) con su respectivo proceso inverso de factorización (regreso):</p>

    <ol>
        <li>
            <strong>Binomio al cuadrado &harr; Trinomio Cuadrado Perfecto (TCP)</strong>
            <ul>
                <li><em>Ida (Producto notable):</em> Elevar un binomio al cuadrado da como resultado un trinomio cuadrado perfecto.</li>
                <p style="background-color: #F5E6D3; padding: 8px; border-radius: 6px; text-align: center;">(a &plusmn; b)<sup>2</sup> = a<sup>2</sup> &plusmn; 2ab + b<sup>2</sup></p>
                <li><em>Regreso (Factorización):</em> Dado un trinomio donde el primero y tercer término tienen raíz cuadrada exacta y el término del medio es el doble del producto de esas raíces, se regresa al binomio al cuadrado.</li>
                <p style="background-color: #F5E6D3; padding: 8px; border-radius: 6px; text-align: center;">a<sup>2</sup> &plusmn; 2ab + b<sup>2</sup> = (a &plusmn; b)<sup>2</sup></p>
            </ul>
        </li>
        <br>
        <li>
            <strong>Binomios conjugados &harr; Diferencia de cuadrados</strong>
            <ul>
                <li><em>Ida (Producto notable):</em> Multiplicar la suma de dos términos por su diferencia resulta en una diferencia de cuadrados.</li>
                <p style="background-color: #F5E6D3; padding: 8px; border-radius: 6px; text-align: center;">(a + b)(a - b) = a<sup>2</sup> - b<sup>2</sup></p>
                <li><em>Regreso (Factorización):</em> Dada una resta de dos términos que cuentan con cuadrados perfectos exactos, se descompone en el producto de binomios conjugados.</li>
                <p style="background-color: #F5E6D3; padding: 8px; border-radius: 6px; text-align: center;">a<sup>2</sup> - b<sup>2</sup> = (a + b)(a - b)</p>
            </ul>
        </li>
        <br>
        <li>
            <strong>Binomios con un término común &harr; Trinomio cuadrático de la forma x<sup>2</sup> + sx + p</strong>
            <ul>
                <li><em>Ida (Producto notable):</em> El producto de dos binomios que comparten un término en común genera un trinomio.</li>
                <p style="background-color: #F5E6D3; padding: 8px; border-radius: 6px; text-align: center;">(x + a)(x + b) = x<sup>2</sup> + (a + b)x + ab</p>
                <li><em>Regreso (Factorización):</em> Partiendo de un trinomio cuadrático, se buscan dos números que sumados den el coeficiente lineal y multiplicados den el término independiente.</li>
                <p style="background-color: #F5E6D3; padding: 8px; border-radius: 6px; text-align: center;">x<sup>2</sup> + (a + b)x + ab = (x + a)(x + b)</p>
            </ul>
        </li>
        <br>
        <li>
            <strong>Binomio al cubo &harr; Cubo perfecto de binomios</strong>
            <ul>
                <li><em>Ida (Producto notable):</em> Elevar un binomio al cubo genera un polinomio de cuatro términos.</li>
                <p style="background-color: #F5E6D3; padding: 8px; border-radius: 6px; text-align: center;">(a &plusmn; b)<sup>3</sup> = a<sup>3</sup> &plusmn; 3a<sup>2</sup>b + 3ab<sup>2</sup> &plusmn; b<sup>3</sup></p>
                <li><em>Regreso (Factorización):</em> Si un polinomio cumple con la estructura de cubos en sus extremos y los triples productos correspondientes, se contrae a su binomio al cubo original.</li>
                <p style="background-color: #F5E6D3; padding: 8px; border-radius: 6px; text-align: center;">a<sup>3</sup> &plusmn; 3a<sup>2</sup>b + 3ab<sup>2</sup> &plusmn; b<sup>3</sup> = (a &plusmn; b)<sup>3</sup></p>
            </ul>
        </li>
        <br>
        <li>
            <strong>Binomios por trinomio &harr; Suma o diferencia de cubos</strong>
            <ul>
                <li><em>Ida (Producto notable):</em> Multiplicar un binomio por un trinomio con características específicas da una suma o diferencia de cubos.</li>
                <p style="background-color: #F5E6D3; padding: 8px; border-radius: 6px; text-align: center;">(a &plusmn; b)(a<sup>2</sup> ∓ ab + b<sup>2</sup>) = a<sup>3</sup> &plusmn; b<sup>3</sup></p>
                <li><em>Regreso (Factorización):</em> Una suma o resta de dos términos cúbicos se puede descomponer en el producto de un binomio por un trinomio.</li>
                <p style="background-color: #F5E6D3; padding: 8px; border-radius: 6px; text-align: center;">a<sup>3</sup> &plusmn; b<sup>3</sup> = (a &plusmn; b)(a<sup>2</sup> ∓ ab + b<sup>2</sup>)</p>
            </ul>
        </li>
    </ol>
`;