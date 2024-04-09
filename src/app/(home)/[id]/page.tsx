const MedicinePage = async ({ params }: { params: { id: string } }) => {
  const medicineId = params.id;
  // const medicineDetails = await getMedicineDetails(medicineId);
  return (
    <div className='text-white'>
      MedicinePage
      <br />
      {medicineId}
    </div>
  );
};

export default MedicinePage;