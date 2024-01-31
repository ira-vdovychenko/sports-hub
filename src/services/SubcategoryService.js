export const getSubcategories = async (SportID) => {
  const res = await fetch(`/api/leagues/${SportID}`);
  const data = await res.json();
  const leagues = data.leagues.models.map(({ LeagueID, LeagueName, SportID, isHidden = false }) => ({
    LeagueID,
    LeagueName,
    SportID,
    isHidden,
  })); 
 
  return leagues;
};

export const createSubcategory = async (subcategoryData) => {
  try {
    console.log('Creating subcategory:', subcategoryData);
    const res = await fetch('/api/leagues', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(subcategoryData),
    });

    if (!res.ok) {
      throw new Error('Failed to create subcategory');
    }

    if (res.status !== 201) {
      const data = await res.json();
      console.log('Response data:', data);
    }

    return res.json();
  } catch (error) {
    console.error('Error creating subcategory:', error);
    throw error;
  }
};

  
export const updateSubcategory = async (LeagueID, subcategoryData) => {
  try {
    console.log('Updating subcategory:', subcategoryData);
    const res = await fetch(`/api/leagues/${LeagueID}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(subcategoryData),
    });

    if (!res.ok) {
      throw new Error('Failed to update subcategory');
    }

    if (res.status !== 200) {
      const data = await res.json();
      console.log('Response data:', data);
    }

    return res.json();
  } catch (error) {
    console.error('Error updating subcategory:', error);
    throw error;
  }
}; 
  
export const deleteSubcategory = async (LeagueID) => {
  return await fetch(`/api/leagues/${LeagueID}`, {
    method: 'DELETE',
  }).then((res) => {
    if (!res.ok) {
      throw new Error('Failed to delete subcategory');
    }
    if (res.status !== 204) {
      console.log('Response status:', res.status);
    }

    return res;
  });
};
