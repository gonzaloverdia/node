import { platform, release, arch, cpus } from 'node:os';

console.log('Nombre del sistema operativo: ', platform());
console.log('Versión del sistema operativo: ', release());
console.log('Tipo de arquitectura: ', arch());
console.log('Cantidad de CPUs: ', cpus());

