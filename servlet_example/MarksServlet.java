import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/MarksServlet")
public class MarksServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doPost(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        
        // Set the response content type
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        
        try {
            // Retrieve marks from request parameters
            double sub1 = Double.parseDouble(request.getParameter("sub1"));
            double sub2 = Double.parseDouble(request.getParameter("sub2"));
            double sub3 = Double.parseDouble(request.getParameter("sub3"));
            double sub4 = Double.parseDouble(request.getParameter("sub4"));
            double sub5 = Double.parseDouble(request.getParameter("sub5"));
            
            // Calculate total and average
            double total = sub1 + sub2 + sub3 + sub4 + sub5;
            double average = total / 5.0;
            
            // Generate HTML response
            out.println("<html>");
            out.println("<head><title>Marks Result</title></head>");
            out.println("<body style='font-family: Arial, sans-serif; margin: 20px;'>");
            out.println("<h2>Marks Calculation Result</h2>");
            out.println("<p>Subject 1: " + sub1 + "</p>");
            out.println("<p>Subject 2: " + sub2 + "</p>");
            out.println("<p>Subject 3: " + sub3 + "</p>");
            out.println("<p>Subject 4: " + sub4 + "</p>");
            out.println("<p>Subject 5: " + sub5 + "</p>");
            out.println("<hr>");
            out.println("<h3>Total Marks: " + total + " / 500</h3>");
            out.println("<h3>Average Marks: " + average + "%</h3>");
            
            if (average >= 40) {
                out.println("<h3 style='color:green;'>Status: PASS</h3>");
            } else {
                out.println("<h3 style='color:red;'>Status: FAIL</h3>");
            }
            
            out.println("<br><a href='index.html'>Go Back</a>");
            out.println("</body>");
            out.println("</html>");
            
        } catch (NumberFormatException e) {
            out.println("<html><body>");
            out.println("<h3 style='color:red;'>Error: Please enter valid numbers for all 5 subjects.</h3>");
            out.println("<a href='index.html'>Go Back</a>");
            out.println("</body></html>");
        } finally {
            out.close();
        }
    }
}
