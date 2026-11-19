# Factura de energía eléctrica con subsidio y contribución por estrato
 
La empresa de energía de un municipio necesita un programa que calcule el valor de la factura mensual de un hogar. En Colombia, los estratos 1, 2 y 3 reciben subsidio sobre el consumo de subsistencia, el estrato 4 paga la tarifa plena y los estratos 5 y 6 pagan una contribución adicional. El programa debe pedir el estrato y el consumo del mes, y mostrar el desglose de la factura.
 
## Algoritmo
 
### Entradas
 
**Constantes:**
- Tarifa por kWh: 900
- Consumo de subsistencia: 173 kWh
- Cargo fijo mensual: 6.000
- Subsidio:
  - Estrato 1: 50 %
  - Estrato 2: 40 %
  - Estrato 3: 15 %
- Contribución:
  - Estrato 5: 50 %
  - Estrato 6: 60 %
   
**Variables de entrada:**
- `estrato`: número entero entre 1 y 6
- `consumo`: kWh consumidos en el mes (número mayor o igual a 0)
  
### Proceso de cálculo
 
1. Validar que el estrato esté entre 1 y 6 y que el consumo no sea negativo. Si no se cumple, informar el error y terminar.
2. Calcular el consumo básico: el menor valor entre el consumo y 173.
3. Calcular el consumo en exceso: consumo menos consumo básico.
4. Calcular el valor del consumo básico y el valor del exceso, multiplicando cada uno por la tarifa.
5. Calcular el costo del consumo: valor básico más valor del exceso.
6. Según el estrato:
   - **Estratos 1, 2 o 3:** el subsidio es el porcentaje del estrato aplicado **solo al valor del consumo básico**.
   - **Estrato 4:** no hay subsidio ni contribución.
   - **Estratos 5 o 6:** la contribución es el porcentaje del estrato aplicado **a todo el costo del consumo**.
7. Total a pagar: costo del consumo, menos el subsidio, más la contribución, más el cargo fijo.
### Salidas
 
Mostrar con `alert()`: costo del consumo, valor del subsidio, valor de la contribución y total a pagar. Si hay un dato inválido, mostrar un mensaje de error.
 
## Casos de prueba
 
| Caso | Entradas (estrato, consumo) | Salidas |
|---|---|---|
| 1 | 1, 100 | Costo 90.000 <br> Subsidio 45.000 <br> Contribución 0 <br> Total 51.000 |
| 2 | 1, 200 | Costo 180.000 <br> Subsidio 77.850 <br> Contribución 0 <br> Total 108.150 |
| 3 | 2, 100 | Costo 90.000 <br> Subsidio 36.000 <br> Contribución 0 <br> Total 60.000 |
| 4 | 2, 200 | Costo 180.000 <br> Subsidio 62.280 <br> Contribución 0 <br> Total 123.720 |
| 5 | 3, 100 | Costo 90.000 <br> Subsidio 13.500 <br> Contribución 0 <br> Total 82.500 |
| 6 | 3, 200 | Costo 180.000 <br> Subsidio 23.355 <br> Contribución 0 <br> Total 162.645 |
| 7 | 4, 100 | Costo 90.000 <br> Subsidio 0 <br> Contribución 0 <br> Total 96.000 |
| 8 | 4, 200 | Costo 180.000 <br> Subsidio 0 <br> Contribución 0 <br> Total 186.000 |
| 9 | 5, 100 | Costo 90.000 <br> Subsidio 0 <br> Contribución 45.000 <br> Total 141.000 |
| 10 | 5, 200 | Costo 180.000 <br> Subsidio 0 <br> Contribución 90.000 <br> Total 276.000 |
| 11 | 6, 100 | Costo 90.000 <br> Subsidio 0 <br> Contribución 54.000 <br> Total 150.000 |
| 12 | 6, 200 | Costo 180.000 <br> Subsidio 0 <br> Contribución 108.000 <br> Total 294.000 |
| 13 | 1, 173 (límite de subsistencia) | Costo 155.700 <br> Subsidio 77,850 <br> Contribución 0 <br> Total 83.850 |
| 14 | 1, 0 (sin consumo) | Costo 0 <br> Subsidio 0 <br> Contribución 0 <br> Total 6.000 |
| 15 | 7, 100 | "Estrato no válido" |
| 16 | 3, -5 | "Consumo no válido" |
