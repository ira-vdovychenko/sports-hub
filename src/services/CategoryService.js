export const getCategories = async () => {
  try {
    const res = await fetch('/mirage-api/sports');
    
    if (!res.ok) {
      throw new Error('Failed to fetch categories');
    }
    
    return await res.json();
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
}; 
/* export const getCategories = async (token) => {
  console.log(token);
  try {
    const res = await fetch('/mirage-api/sports', {
      headers: {
        'Authorization': `Bearer ${token}` 
      } 
    });
    
    if (!res.ok) {
      throw new Error('Failed to fetch categories');
    }
    
    return await res.json();
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
}; */

export const createCategory = async (categoryData) => {
  try {
    const res = await fetch("/mirage-api/sports", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(categoryData),
    });

    if (!res.ok) {
      throw new Error("Failed to create category");
    }

    return res.json();
  } catch (error) {
    console.error("Error creating category:", error);
    throw error;
  }
};

export const updateCategory = async (SportID, categoryData) => {
  try {
    const res = await fetch(`/mirage-api/sports/${SportID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(categoryData),
    });

    if (!res.ok) {
      throw new Error("Failed to edit category");
    }

    return res.json();
  } catch (error) {
    console.error("Error editing category:", error);
    throw error;
  }
}; 
/* export const updateCategory = async (SportID, categoryData, token) => {
  try {
    const res = await fetch(`/mirage-api/sports/${SportID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token 
      },
      body: JSON.stringify(categoryData),
    });

    if (!res.ok) {
      throw new Error("Failed to edit category");
    }

    return res.json();
  } catch (error) {
    console.error("Error editing category:", error);
    throw error;
  }
}; */

export const deleteCategory = async (SportID) => {
  return await fetch(`/mirage-api/sports/${SportID}`, {
    method: "DELETE",
  }).then((res) => {
    if (!res.ok) {
      throw new Error("Failed to delete category");
    }

    return null;
  });
};
