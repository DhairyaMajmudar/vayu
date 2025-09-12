export function getCategoryColor(category: string) {
  switch (category) {
    case "personal":
      return "bg-purple-100 text-purple-800";
    case "work":
      return "bg-blue-100 text-blue-800";
    case "travel":
      return "bg-green-100 text-green-800";
    case "family":
      return "bg-pink-100 text-pink-800";
    case "other":
      return "bg-gray-100 text-gray-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
}
