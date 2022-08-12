#include <iostream>
using namespace std;

class customer
{
    private:
    public:
    string customer;
    int age;
};

class rent:public customer
{
    private:
    public:
    int c;
    char choose;
    void data()
    {
        cout << "Please Choose the option From Below!"<<endl;
        cout <<"---------------------------------------"<<endl;
        cout << "1 for Lambo"<< endl;
        cout << "2 for BMW"<< endl;
        cout << "3 for Mercedes"<< endl;
        cout << "4 for Honda"<< endl;
        cout << "5 For exit " << endl;
        cout << "-----------------------------------------"<<endl;
        cin >> c;

        switch (c)
        {
            case 1:
            cout << "You have Choosed Lambo!"<<endl;
            cout << "Your Top Speed is 300"<<endl;
            cout << "Price of Rent is 4000$ For a Day"<<endl;
            cout << "Would You like to buy Y/N?" <<endl; 
            cin>>choose;
            if (choose == 'y')
            {
                cout << "Your Order has been confirmed!"<<endl;
                cout << "Thank You!";
                break;
            }
            else if (choose == 'n')
            {
                data();
                break;
            }
            else
            {
                cout << "error!"<<endl;
                data();
                break;
            }

            case 2:
            cout << "You have Choosed BMW!"<<endl;
            cout << "Your Top Speed is 320"<<endl;
            cout << "Price of Rent is 4000$ For a Day"<<endl;
            cout << "Would You like to buy Y/N?" <<endl; 
            cin>>choose;
            if (choose == 'y')
            {
                cout << "Your Order has been confirmed!"<<endl;
                cout << "Thank You!";
                break;
            }
            else if (choose == 'n')
            {
                data();
                break;
            }
            else
            {
                cout << "error!"<<endl;
                data();
                break;
            }
            
            case 3:
            cout << "You have Choosed Mercedes!"<<endl;
            cout << "Your Top Speed is 240"<<endl;
            cout << "Price of Rent is 4000$ For a Day"<<endl;
            cout << "Would You like to buy Y/N?" <<endl; 
            cin>>choose;
            if (choose == 'y')
            {
                cout << "Your Order has been confirmed!"<<endl;
                cout << "Thank You!";
                break;
            }
            else if (choose == 'n')
            {
                data();
                break;
            }
            else
            {
                cout << "error!"<<endl;
                data();
                break;
            }

            case 4:
            cout << "You have Choosed Honda!"<<endl;
            cout << "Your Top Speed is 200"<<endl;
            cout << "Price of Rent is 4000$ For a Day"<<endl;
            cout << "Would You like to buy Y/N?" <<endl; 
            cin>>choose;
            if (choose == 'y')
            {
                cout << "Your Order has been confirmed!"<<endl;
                cout << "Thank You!";
                break;
            }
            else if (choose == 'n')
            {
                data();
                break;
            }
            else
            {
                cout << "error!"<<endl;
                data();
                break;
            }

            case 5:
            cout << "Thank You For Visiting!"<<endl;
            break;

            case 6:
            cout << "Wrong Input!!"<<endl;
            data();
            break;
        }
    }

};

int main()
{
    rent r;
    r.data();
}