export const renderGoldText = (header: string) =>
  header.split("<gold>").map((part, index) =>
    part.includes("</gold>") ? (
      <span key={index} className="text-sand">
        {part.replace("</gold>", "")}
      </span>
    ) : (
      part
    )
  );
