export default function Logo({ companyName }) {
    const getInitials = (name) => {
      const words = name.split(" ");
      const initials = words.map(word => word.charAt(0).toUpperCase()).join("");
      return initials;
    };
  
    const stringToColor = (str) => {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
          hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        const color = '#' + ((hash >> 16) & 0xFFFFFF).toString(16).padStart(6, '0');
        return color;
      };

    const initials = getInitials(companyName);
    const backgroundColor = stringToColor(companyName);
    
    return (
      <div
        className="flex items-center justify-center  text-white rounded-full w-12 h-12 mr-4"
        style={{
            backgroundColor: backgroundColor,
            fontSize: "1rem",
          }}
      >
        {initials}
      </div>
    );
  }