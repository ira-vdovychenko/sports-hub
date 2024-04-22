export const getSubcategories = async () => {
  try {
    const res = await fetch("/mirage-api/leagues");

    if (!res.ok) {
      throw new Error("Failed to fetch subcategories");
    }

    const data = await res.json();

    if (!data || !data.leagues) {
      throw new Error("Invalid data format");
    }

    return data.leagues;
  } catch (error) {
    console.error("Failed to fetch subcategories:", error);
    throw new Error("Failed to fetch subcategories");
  }
};

export const createSubcategory = async (subcategoryData) => {
  try {
    const res = await fetch("/mirage-api/leagues", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(subcategoryData),
    });

    if (!res.ok) {
      throw new Error("Failed to create subcategory");
    }

    if (res.status === 201) {
      return res.json();
    } else {
      throw new Error("Unexpected response status");
    }
  } catch (error) {
    console.error("Error creating subcategory:", error);
    throw error;
  }
};

export const updateSubcategory = async (LeagueID, subcategoryData) => {
  try {
    const res = await fetch(`/mirage-api/leagues/${LeagueID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(subcategoryData),
    });

    if (!res.ok) {
      throw new Error("Failed to update subcategory");
    }

    if (res.status !== 200) {
      const data = await res.json();
      console.log("Response data:", data);
    }

    return res.json();
  } catch (error) {
    console.error("Error updating subcategory:", error);
    throw error;
  }
};

export const deleteSubcategory = async (LeagueID) => {
  return await fetch(`/mirage-api/leagues/${LeagueID}`, {
    method: "DELETE",
  }).then((res) => {
    if (!res.ok) {
      throw new Error("Failed to delete subcategory");
    }
    if (res.status !== 204) {
      console.log("Response status:", res.status);
    }

    return res;
  });
};

/* export const getSubcategoriesByCategoryId = async (SportID) => {
  try {
    const url = `/mirage-api/leagues/${SportID}`;
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();

    if (!data || !data.leagues || !data.leagues.models) {
      throw new Error("Invalid data format");
    }

    const leagues = data.leagues.models.map(
      ({ LeagueID, LeagueName, SportID, isHidden = false }) => ({
        LeagueID,
        LeagueName,
        SportID,
        isHidden,
      })
    );

    return leagues;
  } catch (error) {
    console.error("Error fetching subcategories:", error);
    return [];
  }
}; */
