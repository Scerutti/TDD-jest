# Repositorio de Pruebas Unitarias con Jest

![Jest Logo](./assets/jest-logo.png)

Este repositorio contiene ejemplos y explicaciones sobre pruebas unitarias utilizando el framework de pruebas Jest. A continuación, encontrarás información sobre las diferencias entre `expect().toBe()` y `expect().toEqual()` en Jest.

## Diferencias entre `toBe()` y `toEqual()`

En Jest, hay dos métodos comunes para comparar valores en las pruebas unitarias: `toBe()` y `toEqual()`. Ambos se utilizan para verificar igualdad, pero tienen diferencias clave en cómo realizan las comparaciones y en qué situaciones son más apropiados.

### `expect().toBe()`

- `toBe()` se utiliza para comparar valores primitivos como números, strings y booleanos.
- Realiza una comparación estricta (`===`), lo que significa que los valores deben ser del mismo tipo y tener el mismo valor.
- No es adecuado para comparar objetos y arrays, ya que compara las referencias en lugar del contenido.
- Útil para verificar igualdad estricta de tipos y valores.

```javascript
test('toBe example', () => {
  expect(5).toBe(5); // Pasa
  expect('hello').toBe('hello'); // Pasa
  expect([1, 2, 3]).not.toBe([1, 2, 3]); // Falla, compara referencias de arrays distintos
});
```

### `expect().toEqual()`

- toEqual() se utiliza para comparar contenido de objetos y arrays de manera profunda.
- Verifica que los valores dentro de objetos y arrays sean iguales, independientemente de las referencias.
- Útil para comparar objetos y arrays, ya que verifica el contenido y no solo las referencias.
- No se preocupa por la igualdad estricta de tipos y puede manejar conversiones implícitas.

```javascript
test('toEqual example', () => {
  expect(5).toEqual(5); // Pasa
  expect('5').toEqual(5); // Pasa, realiza conversión implícita
  expect([1, 2, 3]).toEqual([1, 2, 3]); // Pasa, compara el contenido de los arrays
});
```