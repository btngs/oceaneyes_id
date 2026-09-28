export function formatDate(dateString) {
  if (dateString) {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('id-ID', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false, // Gunakan format 24 jam
    }).format(date);
  }
  return "-";
}