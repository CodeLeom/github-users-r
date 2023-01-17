

function Footer() {
    const aYear = new Date().getFullYear()
  return (
    <footer className='footer p-10 bg-gray-700 text-white footer-center'>
        <div>
            <p>
                &copy; {aYear} GitHub User Application. All right Reserved. 
            </p>
        </div>
    </footer>
  )
}

export default Footer