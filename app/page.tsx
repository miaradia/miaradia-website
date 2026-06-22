import { redirect } from "next/navigation";

// Cette page sert uniquement à rediriger la racine vers la langue par défaut
export default function RootPage() {
  redirect("/fr");
}