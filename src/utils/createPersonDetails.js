/* eslint-disable import/no-anonymous-default-export */

export default (person) => {
  const personCredits = person.credits.cast.sort((a, b) => b.popularity - a.popularity);

  return {
    id: person.id,
    name: person.name,
    poster: person.profile_path,
    backdrop: personCredits[0]?.backdrop_path,
    overviewData: {
      known_for: person.known_for_department,
      gender: person.gender === 2 ? 'Male' : 'Female',
      birthday: new Date(person.birthday).toDateString(),
      deathday: person.deathday ? new Date(person.deathday).toDateString() : null,
      place_of_birth: person.place_of_birth,
      also_known_as: person.also_known_as,
    },
    biography: person.biography || 'Biography not available.',
    credits: personCredits,
  };
};
