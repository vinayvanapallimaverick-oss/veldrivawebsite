export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // Serialized from trusted, static data; "<" escaped to prevent early tag close.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
