export const getCategories = async () => {
  const res = await fetch('/mirage-api/sports');
  return await res.json();
  };
  
export const createCategory = async (categoryData) => {
  try {
    console.log('Creating category:', categoryData);
    const res = await fetch('/mirage-api/sports', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(categoryData),
    });

    if (!res.ok) {
      throw new Error('Failed to create category');
    }

    if (res.status !== 201) {
      const data = await res.json();
      console.log('Response data:', data);
    }

    return res.json();
  } catch (error) {
    console.error('Error creating category:', error);
    throw error;
  }
};


export const updateCategory = async (SportID, categoryData) => {
  try {
    console.log('Updating category:', categoryData);
    
    const res = await fetch(`/mirage-api/sports/${SportID}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(categoryData),
    });

    if (!res.ok) {
      throw new Error('Failed to edit category');
    }

    if  (res.status !== 200 && res.status !== 204)  {
      const data = await res.json();
      console.log('Response data:', data);
    }

    return res.json();
  } catch (error) {
    console.error('Error editing category:', error);
    throw error;
  }
};

export const deleteCategory = async (SportID) => {
console.log('Deleting category with ID:', SportID);
return await fetch(`/mirage-api/sports/${SportID}`, {
  method: 'DELETE',
}).then((res) => {
  if (!res.ok) {
    throw new Error('Failed to delete category');
  }
  if (res.status !== 204) {
    console.log('Response status:', res.status);
  }

  return res;
});
};
