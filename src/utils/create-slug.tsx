export function createSlug(username: string): string {
  return (
    username
      // Decompõe caracteres acentuados (ex: "á" -> "á", "Ç" -> "Ç")
      .normalize("NFD")
      // Remove marcas diacríticas (acentos) geradas pela normalização
      .replace(/[\u0300-\u036f]/g, "")
      // Substitui um ou mais espaços por um hífen
      .replace(/\s+/g, "-")
      // Remove qualquer caractere especial, mantendo apenas letras, números e hífen
      .replace(/[^a-zA-Z0-9-]/g, "")
      // Evita hífens duplicados (ex: "--" -> "-")
      .replace(/-+/g, "-")
      // Remove hífens no início e no fim da string
      .replace(/^-+|-+$/g, "")
      // Converte para minúsculas para padronizar o username
      .toLowerCase()
      // Remove espaços em branco no início e no fim
      .trim()
  );
}
