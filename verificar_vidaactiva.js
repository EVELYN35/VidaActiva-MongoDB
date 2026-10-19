const dbVidaActiva = db.getSiblingDB("VidaActiva");

print("=== Verificacion VidaActiva ===");
print("Pacientes: " + dbVidaActiva.pacientes.countDocuments({}));
print("Profesionales: " + dbVidaActiva.profesionales.countDocuments({}));
print("Citas: " + dbVidaActiva.citas.countDocuments({}));

dbVidaActiva.citas.createIndex({ fecha: 1 });

print("Indice de citas verificado");
print("=== Proceso finalizado ===");