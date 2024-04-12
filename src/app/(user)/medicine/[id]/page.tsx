const MedicinePage = async ({ params }: { params: { id: number } }) => {
  const medicineId = params.id;

  return (
    <div className='text-white'>
      MedicinePage
      <br />
      {medicineId}
    </div>
  );
};

export default MedicinePage;
