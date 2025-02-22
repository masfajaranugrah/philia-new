export const fetchEvents = async () => {
  try {
    const response = await fetch("/api/calender");
     if (!response.ok) {
      throw new Error("Gagal mengambil data event");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error;
  }
};


export const fetchFAQ = async () => {
  try {
    const response = await fetch("/api/question");
     if (!response.ok) {
      throw new Error("Gagal mengambil data event");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error;
  }
};

export const fetchFasilitas = async () => {
  try {
    const response = await fetch("/api/fasilitas");
     if (!response.ok) {
      throw new Error("Gagal mengambil data event");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error;
  }
};

export const fetchWA = async () => {
  try {
    const response = await fetch("/api/telphone");
     if (!response.ok) {
      throw new Error("Gagal mengambil data tlp");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error;
  }
};

