using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WindowsFormsApplication1
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            string hash = textBox1.Text.Trim();
            List<string> sh = new List<string>();
            int i = 0;
            bool isend = false;
            while (!isend)
            {
                if (i >= hash.Length)
                {
                    isend = true;
                }
                else
                {
                    sh.Add(hash.Substring(i, 4));
                    i += 4;
                }
            }

            double sum=0;

            for (int j = 0; j < sh.Count; j++)
            {
                int decValue = Convert.ToInt32(sh[j],16);
                sum += decValue;
            }

            if (sum % 50 == 0)
            {
                label1.Text = "0000";
            }
            else
            {
                string fir = hash.Substring(0, 13);
                double X= Convert.ToInt64(fir,16);

                //label1.Text = fir.ToString()+" --- "+X.ToString();

                double Y = 4503599627370496;

                double n = ((100f * Y) - X) / (100f * (Y - X));
                label1.Text = n.ToString();
            }

        }
    }
}


